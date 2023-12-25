"use client";
import React, { useContext } from "react";
import { TabContext } from "./tabProvider";
import styles from "./tab.module.css";
import cx from "classnames";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  return (
    <ul className={styles.tab}>
      <li
        className={cx(styles.item, tab === "follow" && styles.active)}
        onClick={() => setTab("follow")}
      >
        Follow
      </li>

      <li
        className={cx(styles.item, tab === "recommend" && styles.active)}
        onClick={() => setTab("recommend")}
      >
        Recommend
      </li>
    </ul>
  );
}
