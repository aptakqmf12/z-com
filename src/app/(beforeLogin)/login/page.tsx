// import { redirect } from "next/navigation";
//redirect는 server routing
"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  // redirect("/i/flow/login");
  const router = useRouter();

  router.replace("/i/flow/login");
  return null;
}
