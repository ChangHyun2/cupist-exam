import React from "react";
import styled from "@emotion/styled";
import s from "csd";

const sizeCSS = {
  xs: "padding: 5px 10px; font-size: 12px; border-radius: 3px;",
  sm: "padding: 13px 26px; font-size: 16px; border-radius: 5px;",
};

const themes = {
  blue: {
    bg: s.colors.blue[400],
    text: s.colors.grey[200],
  },
  grey: {
    bg: s.colors.grey[600],
    text: s.colors.grey[200],
  },
};

interface I_BaseButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  theme?: "blue" | "grey";
  size?: "xs" | "sm";
  disabled?: boolean;
  css?: any;
}

interface I_ButtonProps extends I_BaseButtonProps {
  children: JSX.Element | string;
  fluid?: boolean;
  variant?: "normal" | "outline";
}
interface I_IconButtonProps extends I_BaseButtonProps {
  Icon: React.FC;
  children?: JSX.Element | string;
}

const StyledButton = styled.button`
  ${s.rowCenter}
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: inherit;
  border: 1px solid;
  ${s.bold}

  ${({
    size,
    theme,
    fluid,
    variant,
  }: {
    theme: "blue" | "grey";
    fluid: boolean;
    size: "xs" | "sm";
    variant: "normal" | "outline";
  }) => {
    const themeColor = themes[theme];

    return `
    ${sizeCSS[size]}
    border-color: ${themeColor.bg};    
    background-color: ${variant === "outline" ? s.colors.white : themeColor.bg};
    color: ${variant === "outline" ? s.colors.black : themeColor.text};
    ${fluid ? "width: 100%;" : ""}
  `;
  }}
`;

const Button = React.forwardRef<HTMLButtonElement, I_ButtonProps>(
  (
    {
      onClick,
      children,
      size = "sm",
      theme = "blue",
      fluid = false,
      disabled = false,
      variant = "normal",
      ...rest
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      size={size}
      theme={theme}
      variant={variant}
      fluid={fluid}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
);

const StyledIconButton = styled.button`
  ${s.rowSpaceBetween}
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: inherit;
  border: none;
  padding: none;
  background-color: none;
  -webkit-padding-before: 0px;
  -webkit-padding-end: 0px;
  -webkit-padding-after: 0px;
  -webkit-padding-start: 0px;

  ${({ size, theme }: { theme: "blue" | "grey"; size: "xs" | "sm" }) => {
    const themeColor = themes[theme];

    return `    
    color: ${themeColor.text};
    svg{
      ${size === "xs" ? s.h16 : s.h22}
    }
`;
  }}
`;

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  I_IconButtonProps
>(
  (
    {
      onClick,
      children,
      size = "sm",
      theme = "blue",
      disabled = false,
      Icon,
      ...rest
    },
    ref
  ) => (
    <StyledIconButton
      ref={ref}
      size={size}
      theme={theme}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <Icon />
    </StyledIconButton>
  )
);

export default Button;
