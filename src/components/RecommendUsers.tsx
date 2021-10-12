import styled from "@emotion/styled";
import { css } from "@emotion/react";
import s from "csd";
import { I_User } from "@types";

import { useUsers } from "@hooks";
import ProfileCardWithCarousel from "@components/ProfileCardWithCarousel";
import ProfileCard from "@components/ProfileCard";

const StyledRecommendUsers = styled.div`
  padding: 5px;
  height: calc(100vh - 93px);
  overflow: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 5px;

  > * {
    height: 90%;
    scroll-snap-align: start;
  }
`;

export default function RecommendUsers() {
  const users = useUsers();

  if (users.status === "idle" || users.status === "pending") {
    return <div>loading...</div>;
  }

  if (users.status === "rejected") {
    return <div>{users.error || "error"}</div>;
  }

  if (users.status === "resolved") {
    if (!users.data) return null;

    const recommended = [];
    for (let i = 0; i < users.data.length; i++) {
      if (i % 10 === 2) {
        const gridUsers = [];
        for (let j = 0; j < 4; j++) {
          users.data[i + j] && gridUsers.push(users.data[i + j]);
        }

        recommended.push(gridUsers);
        i += 3;
      } else {
        recommended.push(users.data[i]);
      }
    }

    return (
      <StyledRecommendUsers>
        {recommended.map((userOrGridUsers: I_User | Array<I_User>) =>
          Array.isArray(userOrGridUsers) ? (
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 5px;
                ${s.mb1}
              `}
            >
              {userOrGridUsers.map((gridUsers) => (
                <ProfileCard user={gridUsers} />
              ))}
            </div>
          ) : (
            <ProfileCardWithCarousel user={userOrGridUsers} />
          )
        )}
      </StyledRecommendUsers>
    );
  }

  return null;
}
