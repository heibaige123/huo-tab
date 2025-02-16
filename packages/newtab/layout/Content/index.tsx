import { useNewTabStoreState } from '@store/index';
import React, { useRef, useEffect, useState, use } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import Styles from './index.style.module.css';

export function Content(): React.JSX.Element {
  const { labelCollections, showTabIndex, setContainerContentHeight } =
    useNewTabStoreState();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const offsetHeight = containerRef.current.offsetHeight;
      setContainerContentHeight(offsetHeight);
    }
  });

  useEffect(() => {
    if (containerRef.current) {
      const offsetHeight = containerRef.current.offsetHeight;

      containerRef.current.scrollTop = showTabIndex * offsetHeight;

      console.log('scroll-2', showTabIndex);
    }
  }, [showTabIndex]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className={Styles.container}
      >
        {labelCollections.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={Styles['label-item-container']}
              key={item.id}
            >
              <div className={Styles['label-item-inner']}>
                {item.content[0].title}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
