import React from "react";
import TabProvider from "./_component/tabProvider";
import Tab from "./_component/tab";
import PostForm from "./_component/postForm";
import PostCard from "../_component/postCard";
import styles from "./home.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { revalidatePath, revalidateTag } from "next/cache";

async function fetchTest() {
  const res = await fetch("http...", {
    next: {
      tags: ["a", "b"],
    },
    //cache: "no-store", -> 서버에서 저장(캐싱)하지 않겠다.
  });

  // revalidateTag("b") -> b 캐시를 지운다
  // revalidatePath("/home") -> home 라우트의 모든 캐시를 지운다

  if (!res.ok) {
    throw new Error("error");
  }

  return res.json();
}

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["a", "b"], queryFn: fetchTest });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <div className={styles.container}>
          <Tab />

          <PostForm />

          <ul className={styles.postList}>
            {Array.from({ length: 200 }).map((_, i) => (
              <PostCard key={i} />
            ))}
          </ul>
        </div>
      </TabProvider>
    </HydrationBoundary>
  );
}
