import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function TweetModalLayout({ children, modal }: Props) {
  return (
    <div>
      {children}

      {modal}
    </div>
  );
}
