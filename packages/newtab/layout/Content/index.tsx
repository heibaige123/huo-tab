import { useNewTabStore } from '@store/index';
import { LabelCollectionItemType } from '@store/types';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import React, { useRef } from 'react';
import styles from './index.module.css';

export function Content(): React.JSX.Element {
  const labelCollections = useNewTabStore((state) => state.labelCollections);

  return (
    <div className={styles['content']}>
      {labelCollections.map((item) => {
        return (
          <section className={styles['content-inner']} key={item.id}>
            <div>{item.content[0].title}</div>
          </section>
        );
      })}
    </div>
  );
}
