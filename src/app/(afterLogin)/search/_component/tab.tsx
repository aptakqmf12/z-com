"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import styles from "./tab.module.css";
import cx from "classnames";

export enum TabStatus {
  HOT = "hot",
  RECOMMEND = "recommend",
}

export default function Tab() {
  const searchParams = useSearchParams();

  const [currentTab, setCurrentTab] = useState<TabStatus>(TabStatus.HOT);

  const handleClick = (v: TabStatus) => {
    setCurrentTab(v);
  };

  return (
    <div className={styles.tab}>
      <div
        className={cx(styles.tabItem, currentTab === TabStatus.HOT && "active")}
        onClick={() => handleClick(TabStatus.HOT)}
      >
        인기
      </div>

      <div
        className={cx(
          styles.tabItem,
          currentTab === TabStatus.RECOMMEND && "active"
        )}
        onClick={() => handleClick(TabStatus.RECOMMEND)}
      >
        추천
      </div>
    </div>
  );
}
