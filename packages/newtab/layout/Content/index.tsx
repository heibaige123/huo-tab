import { useNewTabStore } from '@store/index';
import React, { useRef, useEffect, useState, useMemo, use } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import Styles from './index.style.module.scss';
import { LabelCollectionItemType } from '@store/types';

const threshold = 10;

export function Content(): React.JSX.Element {
  const labelCollections = useNewTabStore((state) => state.labelCollections);
  const getContentHeight = useNewTabStore((state) => state.getContentHeight);
  const showTabIndex = useNewTabStore((state) => state.showTabIndex);

  const containerStyle = useMemo(() => {
    const { containerHeight, labelItemHeight } = getContentHeight();

    return {
      height: containerHeight + '%',
      transform: `translate3d(0px, -${labelItemHeight * showTabIndex}%, 0px)`,
    };
  }, [showTabIndex]);

  return (
    <AnimatePresence>
      <motion.div className={Styles['label-container']} style={containerStyle}>
        {labelCollections.map((item, index) => {
          return (
            <motion.div
              className={[Styles['label-item-container']].join(' ')}
              style={{
                height: getContentHeight().labelItemHeight + '%',
              }}
            >
              <LabelContent key={item.id} label={item} index={index} />;
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

function LabelContent({
  label,
  index,
}: {
  label: LabelCollectionItemType;
  index: number;
}): React.JSX.Element {
  const showTabIndex = useNewTabStore((state) => state.showTabIndex);
  const setShowTabIndex = useNewTabStore((state) => state.setShowTabIndex);

  const [isScrolling, setIsScrolling] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const { deltaY } = event;

    if (showTabIndex !== index || isScrolling) {
      return;
    }

    if (deltaY > threshold) {
      setShowTabIndex(showTabIndex + 1);
      containerRef!.current!.scrollTop = 0;

      return;
    }

    if (deltaY < -threshold) {
      setShowTabIndex(showTabIndex - 1);
      containerRef!.current!.scrollTop = 0;

      return;
    }
  }

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const { scrollTop, scrollHeight, clientHeight } =
      event.currentTarget as HTMLDivElement;

    // 下滑到底
    if (scrollTop + clientHeight >= scrollHeight) {
      setIsScrolling(false);
      return;
    }

    // 上滑到顶
    if (scrollTop === 0) {
      setIsScrolling(false);
      return;
    }

    setIsScrolling(true);
  }

  return (
    <div
      ref={containerRef}
      className={[
        Styles['label-item-inner'],
        showTabIndex === index ? '' : 'hidden',
      ].join(' ')}
      onWheel={(e) => handleWheel(e)}
      onScroll={(e) => handleScroll(e)}
      data-index={index}
    >
      <div className={Styles['label-item']}>{label.content[0].title}</div>
    </div>
  );
}
