import React, { ReactElement } from "react";
import Divider from "@UI/Divider";
import s from "csd";
import { css } from "@emotion/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface I_DialogProps {
  title: string;
  detail?: string;
  children: JSX.Element | Array<ReactJSXElement>;
}

export default function TitleDialog({
  title,
  detail,
  children,
}: I_DialogProps) {
  return (
    <>
      <header
        css={css`
          position: sticky;
          top: 0;
          background-color: ${s.colors.white};
          ${s.rowCenter};
          padding: 15px 0;
          ${s.bold}

          div {
            flex: 1;
            ${s.rowCenter}
          }

          p {
            margin-top: 8px;
            color: ${s.colors.grey[600]};
          }
        `}
      >
        <div>{title}</div>
        {detail ? <p>{detail}</p> : null}
      </header>
      <Divider />
      <div
        css={css`
          padding: 10px 20px;
        `}
      >
        {children}
      </div>
    </>
  );
}
