import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import s from "csd";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/FavoriteSharp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";

const StyledFootNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  ul {
    height: 50px;
    background-color: ${s.colors.grey[50]};
    ${s.rowSpaceBetween};
  }

  li {
    flex: 1;
    ${s.rowCenter}
  }

  a {
    text-decoration: none;
  }

  svg {
    stroke-color: red;
    color: ${s.colors.black};

    :hover {
      cursor: pointer;
    }
  }
`;

const StyledFootNavOffset = styled.div`
  height: 50px;
`;

export default function FootNav() {
  const location = useLocation();

  return (
    <div>
      <StyledFootNavOffset />
      <StyledFootNav>
        <ul>
          {[
            { path: "/", Icon: { Off: HomeOutlinedIcon, On: HomeIcon } },
            {
              path: "/feed",
              Icon: { Off: GridViewIcon, On: GridViewSharpIcon },
            },
            {
              path: "/like",
              Icon: { Off: FavoriteBorderIcon, On: FavoriteIcon },
            },
            {
              path: "/message",
              Icon: { Off: ChatBubbleOutlineIcon, On: ChatBubbleIcon },
            },
            {
              path: "/user",
              Icon: { Off: PersonOutlineIcon, On: PersonIcon },
            },
          ].map(({ path, Icon }) => (
            <li key={path}>
              <Link to={path}>
                {location.pathname === path ? <Icon.On /> : <Icon.Off />}
              </Link>
            </li>
          ))}
        </ul>
      </StyledFootNav>
    </div>
  );
}
