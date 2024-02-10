"use client";
import React, { useContext } from "react";
import { PostTab, TabContext } from "./tabProvider";
import RecommendedPosts from "./recommendedPosts";
import FollowingsPosts from "./followingsPosts";

export default function PostDivider() {
  const { tab } = useContext(TabContext);

  switch (tab) {
    case PostTab.RECOMMEND:
      return <RecommendedPosts />;

    case PostTab.FOLLOW:
      return <FollowingsPosts />;

    default:
      return <FollowingsPosts />;
  }
}
