import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import s from "csd";

const StyledTabIndicator = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border-top-style: solid;
  border-top-width: 1px;
`;

const StyledTabs = styled.div`
  position: relative;
  list-style: none;
  height: 30px;
  ${s.row}
`;

interface I_Tabs {
  focusedIdx: number;
  children?: Array<JSX.Element>;
  onChange: (focusedIdx: number) => void;
  duration?: number;
}

export default function Tabs({
  focusedIdx,
  children,
  onChange,
  duration = 300,
  ...rest
}: I_Tabs) {
  if (!children) {
    return null;
  }

  const dsIndicator = [
    `transition: transform ${duration}ms`,
    `width: ${100 / children.length}%`,
    `transform: translate(${100 * focusedIdx}%,-${100}%)`,
  ];

  return (
    <StyledTabs {...rest}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          key: i,
          isFocused: focusedIdx === i,
          onClick: (e: React.MouseEvent): void => {
            onChange(i);
          },
        })
      )}
      <StyledTabIndicator
        css={css`
          ${dsIndicator.join(";")}
        `}
      />
    </StyledTabs>
  );
}
