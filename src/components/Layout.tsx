import React from "react";
import styled from "@emotion/styled";
import s from "csd";

import FootNav from "@components/FootNav";
interface I_LayoutProps {
  children: JSX.Element;
}

const StyledLayout = styled.div`
  max-width: 500px;
  ${s.colCenter}
`;

export default function Layout({ children }: I_LayoutProps) {
  return (
    <StyledLayout>
      {children}
      <FootNav />
    </StyledLayout>
  );
}
