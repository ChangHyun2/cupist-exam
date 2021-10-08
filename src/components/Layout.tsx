import React from "react";
import FootNav from "@components/FootNav";

interface I_LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: I_LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <FootNav />
    </>
  );
}
