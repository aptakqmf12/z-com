"use client";
import React, { useState, useContext, ChangeEvent, useRef } from "react";
import styles from "./postForm.module.css";
import Image from "next/image";

export default function PostForm() {
  const imgRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState("");
  const [uploadImages, setUploadImages] = useState([]); //TODO: 이미지 선택 구현

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onClickImageUpload = () => {
    imgRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <div className="flex_row">
        <div className={styles.thumb}>
          <Image src="/profile.png" width={30} height={30} alt="profile" />
        </div>

        <form>
          <textarea value={text} onChange={onChangeTextArea} />
        </form>
      </div>

      <div className={styles.utils}>
        <div className={styles.gallary}>
          <input type="file" id="imageSelect" ref={imgRef} />
          <button onClick={onClickImageUpload}>이미지</button>
        </div>

        <div>
          <button>post</button>
        </div>
      </div>
    </div>
  );
}
