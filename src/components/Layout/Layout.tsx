import React from 'react';
import styles from "./Layout.module.css";

function Layout(props: LayoutProps) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {props.head}
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
}

interface LayoutProps {
  head?: JSX.Element | JSX.Element[],
  children?: JSX.Element | JSX.Element[]
}

export default React.memo(Layout);
