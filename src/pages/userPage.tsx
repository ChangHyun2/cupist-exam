import React from "react";
import { Switch, Route } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import s from "csd";

import { useAuth, useToggle } from "@hooks";
import Link from "@UI/Link";
import Button, { IconButton } from "@UI/Button";
import ProfileEditorDrawer from "@components/ProfileEditorDrawer";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SignalWifiStatusbarNullIcon from "@mui/icons-material/SignalWifiStatusbarNull";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InboxIcon from "@mui/icons-material/Inbox";

interface I_ListItem {
  title: string;
  Icon?: {
    FC: React.FC<{ style: { [index: string]: string } }>;
    color: string;
  };
  tag?: string;
  detailElement?: JSX.Element;
}

const StyledListItem = styled.li`
  ${s.h14}
  ${s.rowSpaceBetween}
  ${s.mb2}
  padding: 0 15px;

  > div:first-of-type {
    ${s.row}
    svg {
      ${s.h18}
      margin-right: 10px;
    }
  }
  > div:last-of-type {
    ${s.rowEnd};

    span {
      margin-left: 6px;
      ${s.h10}
      border-radius: 20px;
      background-color: ${s.colors.pink[500]};
      color: white;
      padding: 1px 6px;
    }

    button {
      margin-left: 10px;
      color: ${s.colors.grey[400]};
    }
  }
`;

const ListItem = ({ title, Icon, tag, detailElement }: I_ListItem) => (
  <StyledListItem>
    <div>
      {Icon ? <Icon.FC style={{ color: Icon.color }} /> : null}
      <h3>{title}</h3>
      {tag ? <span>{tag.toUpperCase()}</span> : null}
    </div>
    <div>
      {detailElement || null}
      <IconButton size="xs" Icon={ArrowForwardIosIcon} />
    </div>
  </StyledListItem>
);

const StyledHeader = styled.header`
  ${s.rowEnd}
  ${s.mb1}
  padding: 15px;
`;

const StyledProfileSummary = styled.div`
  ${s.row}
  ${s.mb2}
  padding: 0 15px;

  .avatar {
    width: 80px;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 10px;

    &:after {
      content: "";
      display: block;
      padding-top: 100%;
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  > div:last-of-type {
    flex: 1;

    .isOnline-nickname {
      ${s.row}
      align-items:center;
      margin-bottom: 2px;
      ${s.h16}
      ${s.bold}

      div:first-of-type {
        margin-right: 2px;
      }

      svg {
        color: ${s.colors.grey[400]};
        ${s.h14};
      }
    }

    .job-location {
      ${s.h12};
      margin-bottom: 5px;
    }

    button {
      ${s.h14}
      border-color: ${s.colors.grey[300]};
    }
  }
`;

const StyledSuggessCard = styled.div`
  ${s.mb2};
  background-color: ${s.colors.grey[100]};
  padding: 15px;
  margin: 0 15px;
  ${s.mb2}

  h3 {
    ${s.mb1};
    ${s.bold}
  }

  p {
    ${s.mb1};
    color: ${s.colors.grey[600]};
  }

  button {
    ${s.h14}
    color: ${s.colors.grey[900]};
    border: none;
    background-color: ${s.colors.grey[300]};
  }
`;

const StyledBanner = styled.img`
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
`;

export default function UserPage() {
  const user = useAuth();
  const profileEditorToggler = useToggle({ initialOn: false });

  return (
    <div>
      <Switch>
        <Route path="/user/edit">
          <ProfileEditorDrawer toggler={profileEditorToggler} />
        </Route>
        {"other drawers"}
      </Switch>
      <div
        css={css`
          ${s.fluid}
        `}
      >
        <StyledHeader>
          <SettingsIcon />
        </StyledHeader>
        <StyledProfileSummary>
          <div className="avatar">
            <div>
              <img src={user.thumbnail} alt={user.thumbnail} />
            </div>
          </div>
          <div>
            <div className="isOnline-nickname">
              <div>{user.nickname}</div>
              <CheckIcon />
            </div>
            <div className="job-location">
              {[user.job, user.location.name].join(".")}
            </div>
            <Button
              theme="grey"
              size="xs"
              variant="outline"
              fluid
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                profileEditorToggler.setOn();
              }}
            >
              <Link to="/user/edit">????????? ??????</Link>
            </Button>
          </div>
        </StyledProfileSummary>
        <StyledSuggessCard>
          <h3>????????? ????????? ??????????????????</h3>
          <p>
            ????????? ?????? ???????????? ???????????? ???????????? ????????? ?????? ????????? ????????????.
          </p>
          <Button fluid size="xs">
            ????????????
          </Button>
        </StyledSuggessCard>
        <ul>
          {[
            {
              Icon: { FC: CheckIcon, color: s.colors.red[500] },
              detailElement: (
                <div
                  css={css`
                    ${s.rowCenter}
                    div:first-of-type {
                      width: 4px;
                      height: 4px;
                      border-radius: 100%;
                      background-color: red;
                      margin-right: 4px;
                    }
                  `}
                >
                  <div />
                  <div>??? ??????</div>
                </div>
              ),
              title: "????????? ??????",
            },
            {
              Icon: { FC: StoreMallDirectoryIcon, color: s.colors.yellow[900] },
              detailElement: (
                <div
                  css={css`
                    ${s.rowCenter}
                  `}
                >
                  0
                  <IconButton Icon={InboxIcon} />
                </div>
              ),
              title: "?????????",
            },
            {
              Icon: {
                FC: SignalWifiStatusbarNullIcon,
                color: s.colors.green.A400,
              },
              tag: "hot",
              title: "??????",
            },
            {
              Icon: { FC: FaceRetouchingOffIcon, color: s.colors.green[700] },
              title: "?????? ??????",
            },
            {
              Icon: { FC: PersonAddAlt1Icon, color: s.colors.black },
              title: "?????? ??????",
            },
          ].map(({ title, Icon, tag, detailElement }) => (
            <ListItem
              title={title}
              Icon={Icon}
              tag={tag}
              detailElement={detailElement}
            />
          ))}
        </ul>
        <StyledBanner
          src="https://picsum.photos/200/300"
          alt="https://picsum.photos/200/300"
        />
        <ul>
          {[{ title: "?????? ????????? ??????" }, { title: "?????? ??????" }].map(
            ({ title }) => (
              <ListItem title={title} />
            )
          )}
        </ul>
      </div>
    </div>
  );
}
