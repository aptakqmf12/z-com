"use client";

import React from "react";
import styles from "./tweetModal.module.css";
import { useRouter } from "next/navigation";

export default function TweetModalComponent() {
  const router = useRouter();

  const handleGoHome = () => {
    router.back();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_body}>
        <div className={styles.modal_close} onClick={handleGoHome}>
          X
        </div>

        <h2>트위터 입력</h2>

        <div className={styles.modal_form}>
          <input />
          <input />
          <input />
        </div>
      </div>
    </div>
  );
}
