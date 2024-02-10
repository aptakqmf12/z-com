"use client";
import React from "react";
import styles from "./postCard.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { User } from "@/types";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function PostCard({
  user,
  Images,
  postId,
  content,
  createdAt,
}: User) {
  const router = useRouter();

  const handleClickWrapper = () => {
    router.push("/explore");
  };
  const handleClickCreator = () => {
    router.push(`/${faker.person.fullName()}/status/${1}`);
  };

  return (
    <li className={styles.card} onClickCapture={handleClickWrapper}>
      <div className={styles.top}>
        <div className="flex_row">
          <div className={styles.thumb}>
            <Image
              src={user?.image || "/profile.png"}
              width={20}
              height={20}
              alt="profile"
            />
          </div>

          <div className={styles.creator} onClick={handleClickCreator}>
            {/* {faker.person.fullName()} */}
            {user?.nickname}
          </div>

          <div className={styles.time}>
            {dayjs(faker.date.past()).fromNow(true)}
          </div>
        </div>
      </div>

      <div>{content}</div>

      <div className={styles.contentImage}>
        <Image
          src={faker.image.urlLoremFlickr()}
          width={100}
          height={100}
          alt="profile"
        />
      </div>
    </li>
  );
}
