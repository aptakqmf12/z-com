"use client";
import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./leftNav.module.css";

export default function LeftNav() {
  const segment = useSelectedLayoutSegment();

  const DATA = [
    {
      label: "홈",
      href: "/home",
      segment: "home",
    },
    {
      label: "탐색하기",
      href: "/explore",
      segment: "explore",
    },
    {
      label: "쪽지",
      href: "/messages",
      segment: "messages",
    },
  ];

  const handleLogout = () => {};

  return (
    <ul className={styles.navList}>
      <>
        {DATA.map((obj, i) => {
          const isActive = obj.segment === segment;

          return (
            <li key={i}>
              <Link style={isActive ? { color: "yellow" } : {}} href={obj.href}>
                {obj.label}
              </Link>
            </li>
          );
        })}
        <li className={styles.tweetBtn}>
          <Link href={"/compose/tweet"}>게시하기</Link>
        </li>
      </>

      <li className={styles.logoutBtn} onClick={handleLogout}>
        로그아웃
      </li>
    </ul>
  );
}
