"use client";
import Intro from "../_component/intro";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");

  // 뒷배경에 보여질 Intro
  return <Intro />;
}

// import { redirect } from "next/navigation";
//redirect는 server routing
// redirect("/i/flow/login");
