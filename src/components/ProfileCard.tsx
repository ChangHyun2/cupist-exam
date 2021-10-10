import { css } from "@emotion/react";

import { I_User } from "@types";
import s from "csd";
export default function ProfileCard(user: I_User) {
  return (
    <div>
      <img src={user.thumbnail} alt={user.thumbnail} />
      <div>{[user.nickname, user.age].join(",")}</div>
      <div>{user.concerns[0]}에 관심</div>
      <div>{user.location.name}</div>
      <button
        css={css`
          ${s.colors.blue[500]}
        `}
      >
        보기
      </button>
    </div>
  );
}
