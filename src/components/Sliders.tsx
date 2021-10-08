import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledOuterSliders = styled.div`
  overflow: hidden;
`;
const StyledSliders = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;

  div {
    flex-shrink: 0;
    width: 100%;
  }
`;

interface I_Sliders {
  focusedIdx: number;
  children?: Array<JSX.Element>;
  duration?: number;
}

export default function Sliders({
  focusedIdx,
  children,
  duration = 300,
  ...rest
}: I_Sliders) {
  const offset = -100 * focusedIdx;

  const ds = [
    `transform: translateX(${offset}%)`,
    `transition: transform ${duration}ms`,
  ];

  return (
    <StyledOuterSliders {...rest}>
      <StyledSliders
        css={css`
          ${ds.join(";")}
        `}
      >
        {children}
      </StyledSliders>
    </StyledOuterSliders>
  );
}
