"use client";
import { useEffect } from "react";

export default function MSWComponent() {
  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_API_MOCKING === "enable" &&
      typeof window !== "undefined"
    ) {
      require("@/mocks/browser");
    }
  }, []);
  return null;
}
