import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import s from "csd";

const StyledFootNav = styled.nav`
  ${s.flex}
`;

export default function FootNav() {
  return (
    <StyledFootNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </StyledFootNav>
  );
}
