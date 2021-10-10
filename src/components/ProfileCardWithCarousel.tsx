import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { I_User } from "@types";

import s from "csd";

import Tabs from "@components/Tabs";

const StyledTabs = styled(Tabs)`
  div {
    height: 1px;
    border-radius: 1px;
  }
`;

const StyledProfileCardWithCarousel = styled.div``;

const StyledImages = styled.div`
  div {
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

interface I_ProfileCardWithCarouselProps {
  user: I_User;
}
export default function ProfileCardWithCarousel({
  user,
}: I_ProfileCardWithCarouselProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const domRectRef = React.useRef<DOMRect>();
  const [focusedIdx, setPhotoIdx] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      domRectRef.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const handleClick = (e: React.MouseEvent): void => {
    const domRect = domRectRef.current;
    console.log(domRect);
  };

  console.log(user);
  return (
    <StyledProfileCardWithCarousel ref={ref} onClick={handleClick}>
      <StyledTabs focusedIdx={focusedIdx} onChange={setPhotoIdx}>
        <div />
        <div />
        <div />
      </StyledTabs>

      <StyledImages>
        {user.photos?.map((imgURL) => (
          <div>
            <img src={imgURL} />
          </div>
        ))}
      </StyledImages>
    </StyledProfileCardWithCarousel>
  );
}
