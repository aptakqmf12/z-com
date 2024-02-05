"use client";
import Intro from "../_component/intro";

import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  router.replace("/i/flow/signup");

  // 뒷배경에 보여질 Intro
  return <Intro />;
}

// import { redirect } from "next/navigation";
//redirect는 server routing
// redirect("/i/flow/login");
