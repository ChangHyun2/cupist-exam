import styled from "@emotion/styled";
import { useUsers } from "@hooks";

import ProfileCardWithCarousel from "@components/ProfileCardWithCarousel";

const StyledRecommendUsers = styled.div`
  padding: 5px;
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 5px;

  > * {
    scroll-snap-align: start;
  }
`;

export default function RecommendUsers() {
  const users = useUsers();

  if (users.status === "idle" || users.status === "pending") {
    return <div>loading...</div>;
  }

  if (users.status === "rejected") {
    return <div>{users.error}</div>;
  }

  if (users.status === "resolved") {
    return (
      <StyledRecommendUsers>
        {users.data?.map((user) => (
          <ProfileCardWithCarousel user={user} />
        ))}
      </StyledRecommendUsers>
    );
  }

  return null;
}
