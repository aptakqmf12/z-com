"use client";
import React, { useContext } from "react";
import { PostTab, TabContext } from "./tabProvider";
import styles from "./tab.module.css";
import cx from "classnames";

export default function PostTabs() {
  const { tab, setTab } = useContext(TabContext);

  return (
    <ul className={styles.tab}>
      <li
        className={cx(styles.item, tab === PostTab.FOLLOW && styles.active)}
        onClick={() => setTab(PostTab.FOLLOW)}
      >
        Follow
      </li>

      <li
        className={cx(styles.item, tab === PostTab.RECOMMEND && styles.active)}
        onClick={() => setTab(PostTab.RECOMMEND)}
      >
        Recommend
      </li>
    </ul>
  );
}
