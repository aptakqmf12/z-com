import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>Logo</div>
      <div className={styles.right}>
        <h2>title</h2>
        <div>블라블라</div>
        <Link href={"/login"}>로그인</Link>
        <Link href={"/i/flow/signup"}>회원가입</Link>
      </div>
    </main>
  );
}
