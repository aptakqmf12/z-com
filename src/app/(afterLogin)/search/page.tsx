"use client";

import React from "react";
import Tab from "./_component/tab";

interface Props {
  // 꼭 searchParam"s" 이름 맞춰야함
  searchParams: {
    searchText?: string;
    tabValue?: string;
  };
}

export default function Search({ searchParams }: Props) {
  return (
    <div>
      <h2>search</h2>

      <Tab />

      <div>searchText : {searchParams?.searchText}</div>
      <div>tabValue : {searchParams?.tabValue}</div>
    </div>
  );
}
