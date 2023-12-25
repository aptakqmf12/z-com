"use client";
import React, { createContext, useState } from "react";

export const TabContext = createContext({
  tab: "follow",
  setTab: (v: "follow" | "recommend") => {},
});

interface Props {
  children: React.ReactNode;
}

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState<"follow" | "recommend">("follow");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
