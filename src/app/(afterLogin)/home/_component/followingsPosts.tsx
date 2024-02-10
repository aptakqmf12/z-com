import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../_api/getPosts";
import PostCard from "../../_component/postCard";
import { User } from "@/types";

export default function FollowingsPosts() {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  if (isLoading) return <div>...loading</div>;

  return (
    <ul>
      {data?.map((obj, i: number) => (
        <PostCard {...obj} key={i} />
      ))}
    </ul>
  );
}
