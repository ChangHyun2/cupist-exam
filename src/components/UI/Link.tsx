import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(RouterLink)`
  a {
    text-decoration: none;
  }

  color: inherit;

  a:visited {
    color: inherit;
  }
`;

export default React.forwardRef<HTMLAnchorElement, LinkProps>(function (
  { to, children, ...rest },
  ref
) {
  return (
    <StyledLink to={to} ref={ref} {...rest}>
      {children}
    </StyledLink>
  );
});
