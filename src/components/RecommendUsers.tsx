import styled from "@emotion/styled";
import { useUsers } from "@hooks";

import ProfileCardWithCarousel from "@components/ProfileCardWithCarousel";

const StyledRecommendUsers = styled.div``;

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
