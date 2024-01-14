"use client";

import React from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import styles from "./message.module.css";
import dayjs from "dayjs";

interface Props {}

export default function Messages({}: Props) {
  return (
    <div>
      <h2>messages</h2>

      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li className={styles.wrap} key={i}>
            <div className={styles.left}>
              <Image
                src={faker.image.avatar()}
                alt="thumb"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.right}>
              <div>
                <span className="name">{faker.person.fullName()}</span>

                <span className="date">
                  {dayjs(faker.date.past()).format("YYYY-MM-DD")}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
