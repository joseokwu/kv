import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../../../components';
import styles from '../viewSelectionAnswer.module.css';

export const EmptyState = ({ text }) => {
  return (
    <div className={styles.overviewEmpty}>
      <section>
        <article>
          <div>
            <h3>{text}</h3>
          </div>
        </article>
      </section>
    </div>
  );
};
