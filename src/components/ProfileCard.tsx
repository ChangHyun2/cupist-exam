import { css } from "@emotion/react";
import Button from "@components/Button";
import { I_User } from "@types";
import s from "csd";

interface I_ProfileCardProps {
  user: I_User;
}

export default function ProfileCard({ user }: I_ProfileCardProps) {
  return (
    <div
      css={css`
        width: 50%;
        border-radius: 10px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          width: 100%;
          position: relative;

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
          position: relative;
          background-color: ${s.colors.grey[800]};
          color: white;
          padding: 2px 8px 8px 8px;
          font-size: 8px;

          > div {
            margin-bottom: 2px;
          }

          z-index: 1;
          box-shadow: 0 -3px 3px ${s.colors.grey[800]};
        `}
      >
        <div
          css={css`
            ${s.h12}
            ${s.bold}
          `}
        >
          {[user.nickname, user.age].join(",")}
        </div>
        <div>{user.concerns[0]}에 관심</div>
        <div>{user.location.name}</div>
        <Button
          size="xs"
          fluid={true}
          css={css`
            margin-top: 4px;
            background-color: ${s.colors.blue[500]};
          `}
        >
          보기
        </Button>
      </div>
    </div>
  );
}
