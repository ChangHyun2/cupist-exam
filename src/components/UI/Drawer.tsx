import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import s from "csd";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { I_Toggle } from "@types";
import { IconButton } from "@UI/Button";
import { CloseOutlined } from "@mui/icons-material";

const animationStyles = {
  right: {
    default: `
      color:white;
      transform: translateX(100vw);`,
    onMount: `
    transform:translateX(calc(100vw - 100%));`,
    onUnMount: `
    transform:translateX(100vw);`,
  },
  bottom: {
    default: `
      color:white;
      transform: translateY(100vh);`,
    onMount: `transform: translateY(0);`,
    onUnMount: `transform: translateY(100vh);`,
  },
};

interface I_DrawerProps {
  title: string;
  children: (args: { closeDrawer: () => void }) => JSX.Element | string;
  toggler: I_Toggle;
  duration?: number;
  from?: "bottom" | "right";
  css?: any;
}

const StyledDrawer = styled.nav`
  ${s.colCenter}
  overflow:scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${s.colors.white};
  ${(props: { ds: string; duration: number }) => `
    ${props.ds};
    transition-duration:${props.duration}ms;
  `}

  .content {
    z-index: 1;
    width: 100%;
    height: 100%;
    color: ${s.colors.black};
  }
`;

export default function Drawer({
  title,
  toggler,
  from = "right",
  duration = 400,
  children,
  ...rest
}: I_DrawerProps) {
  const closed = useRef(false);
  const [ds, setDS] = useState(animationStyles[from].default);

  const closeDrawer = () => {
    setDS((prev) => prev + animationStyles[from].onUnMount);

    closed.current = true;
  };

  const handleClose = (e: React.MouseEvent) => {
    closeDrawer();
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    e.stopPropagation();

    if (!closed.current) return;

    toggler.setOff();
  };

  useEffect(() => {
    setDS((prev) => prev + animationStyles[from].onMount);
  }, [toggler.on, from]);

  const content = (
    <div className="content">
      {from === "right" ? (
        "right content"
      ) : (
        <header
          css={css`
            position: sticky;
            top: 0;
            background-color: ${s.colors.white};
            ${s.rowCenter};
            padding: 10px;
            ${s.bold}

            svg {
              color: ${s.colors.black};
            }

            div {
              flex: 1;
              ${s.rowCenter}
            }
          `}
        >
          <IconButton Icon={CloseOutlined} onClick={handleClose} />
          <div>
            <div>{title}</div>
          </div>
        </header>
      )}
      {children({ closeDrawer })}
    </div>
  );

  return ReactDOM.createPortal(
    <StyledDrawer
      ds={ds}
      duration={duration}
      onTransitionEnd={handleTransitionEnd}
      {...rest}
    >
      {content}
    </StyledDrawer>,
    document.body
  );
}
