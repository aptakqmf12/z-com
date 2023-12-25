import Image from "next/image";
import Link from "next/link";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Image src={""} alt="Logo" />
      </div>

      <div className={styles.right}>
        <h2>title</h2>
        <h3>블라블라</h3>

        <div className={styles.btns}>
          <Link className={styles.btn} href={"/login"}>
            로그인
          </Link>
          <Link className={styles.btn} href={"/i/flow/signup"}>
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}
