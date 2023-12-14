import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div>
      <div>Before Login Layout</div>

      {/* app/(beforeLogin)/page.tsx */}
      {children}

      {/* app/(beforeLogin)/@modal/i/flow/login/page.tsx */}
      {modal}
    </div>
  );
}
