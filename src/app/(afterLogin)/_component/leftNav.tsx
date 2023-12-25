"use client";
import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./leftNav.module.css";

export default function LeftNav() {
  const segment = useSelectedLayoutSegment();

  const DATA = [
    {
      label: "Home",
      href: "/home",
      segment: "home",
    },
    {
      label: "Article",
      href: "/name/status/id",
      segment: "name",
    },
    {
      label: "Explore",
      href: "/explore",
      segment: "explore",
    },
    {
      label: "Tweet",
      href: "/compose/tweet",
      segment: "compose",
    },
  ];

  return (
    <ul className={styles.navList}>
      {DATA.map((obj, i) => {
        const isActive = obj.segment === segment;

        return (
          <li key={i}>
            <Link style={isActive ? { color: "yellow" } : {}} href={obj.href}>
              {obj.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
