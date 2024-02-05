"use client";
import { useState, ChangeEvent } from "react";
import styles from "./modal.module.css";

export default function LoginModal() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className={styles.modal}>
      <div className={styles.modal_body}>
        <h2>Login</h2>

        <form className={styles.modal_form}>
          <label>
            <span>id</span>
            <input
              value={id}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setId(e.target.value)
              }
            />
          </label>

          <label>
            <span>password</span>
            <input
              value={pw}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPw(e.target.value)
              }
            />
          </label>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
