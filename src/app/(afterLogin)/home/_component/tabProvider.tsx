"use client";
import React, { createContext, useState } from "react";

export const enum PostTab {
  RECOMMEND = "recommend",
  FOLLOW = "follow",
}

export const TabContext = createContext({
  tab: PostTab.FOLLOW,
  setTab: (v: PostTab) => {},
});

interface Props {
  children: React.ReactNode;
}

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState<PostTab>(PostTab.FOLLOW);
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
