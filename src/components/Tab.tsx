import { css } from "@emotion/react";
import styled from "@emotion/styled";
import s from "csd";

const StyledTab = styled.li`
  height: 100%;

  button {
    cursor: pointer;
    transition: color 0.3s;
    border: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
`;

interface I_Tab {
  title: string;
  onClick?: (e: React.MouseEvent) => void;
  isFocused?: boolean;
}

export default function Tab({ title, onClick, isFocused, ...rest }: I_Tab) {
  const ds = [`color: ${isFocused ? s.colors.black : s.colors.grey[400]}`];

  return (
    <StyledTab onClick={onClick} {...rest}>
      <button
        css={css`
          ${ds.join(";")}
        `}
      >
        {title}
      </button>
    </StyledTab>
  );
}
