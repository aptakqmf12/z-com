"use client";

import React, { FormEvent, FormEventHandler, useState } from "react";
import styles from "../layout.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function RightSection() {
  const router = useRouter();
  const pathname = usePathname();

  const [searchText, setSearchText] = useState("");

  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`search?searchText=${searchText}`);
  };

  return (
    <div className={styles.right}>
      {pathname === "/explore" ? (
        <></>
      ) : (
        <div className={styles.rightInner}>
          <form className={styles.rightSearch} onSubmit={searchSubmit}>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>

          <div className={styles.rightContnet}>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
      )}
    </div>
  );
}
