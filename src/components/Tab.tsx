import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledTab = styled.li`
  flex: 1;
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
  const ds = [`color: ${isFocused ? "#000" : "#777"}`];

  return (
    <StyledTab
      onClick={onClick}
      css={css`
        ${ds.join(";")}
      `}
      {...rest}
    >
      <button>{title}</button>
    </StyledTab>
  );
}
