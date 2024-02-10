import React from "react";
import TabProvider from "./_component/tabProvider";
import PostTabs from "./_component/postTabs";
import PostForm from "./_component/postForm";
import PostDivider from "./_component/postDivider";
import styles from "./home.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { revalidatePath, revalidateTag } from "next/cache";
import { getRecommendedPosts } from "./_api/getPosts";

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "followings"],
    queryFn: () => getRecommendedPosts({ pageParam: 1 }),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <div className={styles.container}>
          <PostTabs />

          <PostForm />

          <PostDivider />
        </div>
      </TabProvider>
    </HydrationBoundary>
  );
}
