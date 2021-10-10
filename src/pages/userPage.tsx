import { css } from "@emotion/react";
import { useAuth } from "@context/auth";
import s from "csd";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import Button, { IconButton } from "@components/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SignalWifiStatusbarNullIcon from "@mui/icons-material/SignalWifiStatusbarNull";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InboxIcon from "@mui/icons-material/Inbox";

interface I_ListItem {
  title: string;
  Icon?: {
    FC: React.FC<{ css: any }>;
    color: string;
  };
  tag?: string;
  detailElement?: JSX.Element;
}

const ListItem = ({ title, Icon, tag, detailElement }: I_ListItem) => (
  <li
    css={css`
      ${s.h14}
      ${s.rowSpaceBetween}
      ${s.mb2}
      padding: 0 15px;
    `}
  >
    <div
      css={css`
        ${s.row}
      `}
    >
      {Icon ? (
        <Icon.FC
          css={css`
            ${s.h18}
            margin-right: 10px;
            color: ${Icon.color};
          `}
        />
      ) : null}
      <h3>{title}</h3>
      {tag ? (
        <span
          css={css`
            margin-left: 6px;
            ${s.h10}
            border-radius: 20px;
            background-color: ${s.colors.pink[500]};
            color: white;
            padding: 1px 6px;
          `}
        >
          {tag.toUpperCase()}
        </span>
      ) : null}
    </div>
    <div
      css={css`
        ${s.rowEnd};
      `}
    >
      {detailElement || null}
      <IconButton
        size="xs"
        Icon={ArrowForwardIosIcon}
        css={css`
          margin-left: 10px;
          color: ${s.colors.grey[400]};
        `}
      />
    </div>
  </li>
);

export default function UserPage() {
  const user = useAuth();

  return (
    <div
      css={css`
        ${s.fluid}
      `}
    >
      <div
        css={css`
          ${s.rowEnd}
          ${s.mb1}
          padding: 15px;
        `}
      >
        <SettingsIcon />
      </div>
      <div
        css={css`
          ${s.row}
          ${s.mb2}
          padding: 0 15px;
        `}
      >
        <div
          css={css`
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
          `}
        >
          <div>
            <img src={user.thumbnail} alt={user.thumbnail} />
          </div>
        </div>
        <div
          css={css`
            flex: 1;
          `}
        >
          <div
            css={css`
              ${s.row}
              align-items:center;
              margin-bottom: 2px;
              ${s.h16}
              ${s.bold}
              div:first-of-type {
                margin-right: 2px;
              }
            `}
          >
            <div>{user.nickname}</div>

            <CheckIcon
              css={css`
                color: ${s.colors.grey[400]};
                ${s.h14};
              `}
            />
          </div>
          <div
            css={css`
              ${s.h12};
              margin-bottom: 5px;
            `}
          >
            {[user.job, user.location.name].join(".")}
          </div>
          <Button
            theme="grey"
            size="xs"
            variant="outline"
            fluid
            css={css`
              ${s.h14}
              border-color: ${s.colors.grey[300]};
            `}
          >
            프로필 수정
          </Button>
        </div>
      </div>

      <div
        css={css`
          ${s.mb2};
          background-color: ${s.colors.grey[100]};
          padding: 15px;
          margin: 0 15px;
          ${s.mb2}
        `}
      >
        <div
          css={css`
            ${s.mb1};
            ${s.bold}
          `}
        >
          프로필 사진을 인증해주세요
        </div>
        <div
          css={css`
            ${s.mb1};
            color: ${s.colors.grey[600]};
          `}
        >
          신뢰도 높은 프로필을 완성하면 매력적인 이성을 만날 확률이 높아져요.
        </div>
        <Button
          fluid
          size="xs"
          css={css`
            ${s.h14}
            color: ${s.colors.grey[900]};
            border: none;
            background-color: ${s.colors.grey[300]};
          `}
        >
          인증하기
        </Button>
      </div>
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
                <div>새 측정</div>
              </div>
            ),
            title: "프로필 티어",
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
            title: "스토어",
          },
          {
            Icon: {
              FC: SignalWifiStatusbarNullIcon,
              color: s.colors.green.A400,
            },
            tag: "hot",
            title: "인증",
          },
          {
            Icon: { FC: FaceRetouchingOffIcon, color: s.colors.green[700] },
            title: "지인 차단",
          },
          {
            Icon: { FC: PersonAddAlt1Icon, color: s.colors.black },
            title: "친구 초대",
          },
        ].map(({ title, Icon, tag, detailElement }) => (
          <ListItem
            title={title}
            Icon={Icon}
            tag={tag}
            detailElement={detailElement}
          />
        ))}

        <img
          css={css`
            width: 100%;
            height: 60px;
            margin-bottom: 15px;
          `}
          src="https://picsum.photos/200/300"
          alt="https://picsum.photos/200/300"
        />
      </ul>
      <ul>
        {[{ title: "보낸 좋아요 목록" }, { title: "고객 센터" }].map(
          ({ title }) => (
            <ListItem title={title} />
          )
        )}
      </ul>
    </div>
  );
}
