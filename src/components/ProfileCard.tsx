import { css } from "@emotion/react";
import Button from "@components/Button";
import { I_User } from "@types";
import s from "csd";

interface I_ProfileCardProps {
  user: I_User;
  css?: any;
}

export default function ProfileCard({ user, ...rest }: I_ProfileCardProps) {
  return (
    <div
      {...rest}
      css={css`
        ${s.col}
        height: 100%;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          flex: 1;
          width: 100%;
          position: relative;

          img {
            width: 100%;
            height: 100%;
          }

          div {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
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
          ${s.h10}

          > div {
            margin-bottom: 2px;
          }

          z-index: 1;
          box-shadow: 0 -3px 3px ${s.colors.grey[800]};
        `}
      >
        <div
          css={css`
            ${s.h14}
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
          `}
        >
          보기
        </Button>
      </div>
    </div>
  );
}
