"use client";
import React from "react";
import styles from "./postCard.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const MOCK = {
  id: 1,
  creator: "작성자명",
  thumb: "/profile.png",
  contentImage: "/profile.png",
  title: "제목입니다",
  createAt: new Date("2023-12-10"),
};

export default function PostCard() {
  const router = useRouter();

  const handleClickWrapper = () => {
    router.push("/explore");
  };
  const handleClickCreator = () => {
    router.push(`/${MOCK.creator}/status/${MOCK.id}`);
  };

  return (
    <li className={styles.card} onClickCapture={handleClickWrapper}>
      <div className={styles.top}>
        <div className="flex_row">
          <div className={styles.thumb}>
            <Image src={MOCK.thumb} width={20} height={20} alt="profile" />
          </div>

          <div className={styles.creator} onClick={handleClickCreator}>
            {MOCK.creator}
          </div>

          <div className={styles.time}>
            {dayjs(MOCK.createAt).fromNow(true)}
          </div>
        </div>
      </div>

      <div className={styles.contentImage}>
        <Image src={MOCK.contentImage} width={100} height={100} alt="profile" />
      </div>
    </li>
  );
}
