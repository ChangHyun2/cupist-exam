import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import s from "csd";
import { I_Toggle } from "@types";

const animationStyles = {
  default: `
      .content{
        transition: transform;
        transform: scale(0);
      }
      .backdrop{
          transition:background-color;
          background-color: rgba(0,0,0,0);
      }`,
  onMount: `
    .content{
      transform: scale(1);  
    }
    .backdrop{
        background-color: rgba(0,0,0,0.5);
    }`,
  onUnMount: `.content{  
    transform: scale(0);
    }
    .backdrop{
        background-color: rgba(0,0,0,0);
    }`,
};

interface I_ModalProps {
  title: string;
  children: (args: {
    closeDrawer: () => void;
    contentRef: React.RefObject<HTMLDivElement>;
  }) => JSX.Element | string;
  toggler: I_Toggle;
  duration?: number;
  css?: any;
}

const StyledModal = styled.div`
  ${s.colCenter}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${(props: { ds: string; duration: number }) => `
    ${props.ds};
    .content{
        transition-duration: ${props.duration}ms;
    }
    .backdrop{
        transition-duration:${props.duration}ms;
    }
  `}

  .content {
    border-radius: 10px;
    overflow: scroll;
    max-height: 80vh;
    width: 70%;
    z-index: 2;
    color: ${s.colors.black};
    background-color: ${s.colors.white};
  }

  .backdrop {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;

export default function Drawer({
  title,
  toggler,
  duration = 400,
  children,
  ...rest
}: I_ModalProps) {
  const closed = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [ds, setDS] = useState(animationStyles.default);

  const closeDrawer = () => {
    setDS((prev) => prev + animationStyles.onUnMount);

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
    document.body.style.overflow = "hidden";

    setDS((prev) => prev + animationStyles.onMount);
  }, [toggler.on]);

  const content = (
    <div className="content">{children({ closeDrawer, contentRef })}</div>
  );

  return ReactDOM.createPortal(
    <StyledModal
      ds={ds}
      duration={duration}
      onTransitionEnd={handleTransitionEnd}
      {...rest}
    >
      {content}
      <div onClick={handleClose} className="backdrop" />
    </StyledModal>,
    document.body
  );
}
