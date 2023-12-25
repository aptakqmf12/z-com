import React from "react";
import TabProvider from "./_component/tabProvider";
import Tab from "./_component/tab";
import PostForm from "./_component/postForm";
import PostCard from "../_component/postCard";
import styles from "./home.module.css";

export default function Page() {
  return (
    <TabProvider>
      <div className={styles.container}>
        <Tab />

        <PostForm />

        <ul className={styles.postList}>
          {Array.from({ length: 20 }).map((_, i) => (
            <PostCard key={i} />
          ))}
        </ul>
      </div>
    </TabProvider>
  );
}
