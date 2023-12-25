import React from "react";
import styles from "./postCard.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function PostCard() {
  const mock = {
    creator: "작성자명",
    thumb: "/profile.png",
    contentImage: "/profile.png",
    title: "제목입니다",
    createAt: new Date("2023-12-10"),
  };
  return (
    <li className={styles.card}>
      <div className={styles.top}>
        <div className="flex_row">
          <div className={styles.thumb}>
            <Image src={mock.thumb} width={20} height={20} alt="profile" />
          </div>

          <div className={styles.creator}>{mock.creator}</div>

          <div className={styles.time}>
            {dayjs(mock.createAt).fromNow(true)}
          </div>
        </div>
      </div>

      <div className={styles.contentImage}>
        <Image src={mock.contentImage} width={100} height={100} alt="profile" />
      </div>
    </li>
  );
}
