import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import s from "csd";
import { I_User } from "@types";

import Sliders from "@components/Sliders";
import Button from "@components/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

const StyledProfileCardWithCarousel = styled.div`
  position: relative;
  color: ${s.colors.grey[200]};

  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const StyledCarouselTabs = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 40%;
  z-index: 2;
  ${s.rowCenter}
`;
const StyledCarouselTab = styled.button`
  display: block;
  margin: 0 2px;
  border: none;
  background-color: ${(props: { isFocused: boolean }) =>
    props.isFocused ? s.colors.white : `rgba(100,100,100,0.5)`};
  flex: 1;
  height: 3px;
  color: ${s.colors.grey[100]};
  border-radius: 10px;
`;

const ProfileDetail = () => <InfoIcon />;

interface I_ProfileCardWithCarouselProps {
  user: I_User;
}

export default function ProfileCardWithCarousel({
  user,
}: I_ProfileCardWithCarouselProps) {
  const [show, setShow] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);
  const domRectRef = React.useRef<DOMRect>();
  const [focusedIdx, setFocusedIdx] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      domRectRef.current = ref.current.getBoundingClientRect();
    }
  }, [focusedIdx]);

  const nextSlide = () =>
    focusedIdx < user.photos.length - 1 && setFocusedIdx((prev) => prev + 1);
  const prevSlide = () => focusedIdx > 0 && setFocusedIdx((prev) => prev - 1);

  const handleClick = (e: React.MouseEvent): void => {
    const domRect = domRectRef.current;

    if (domRect) {
      const { left, right, width } = domRect;

      const mid = (left + right) / 2;

      mid < e.pageX ? nextSlide() : prevSlide();
    }
  };

  return show ? (
    <StyledProfileCardWithCarousel ref={ref} onClick={handleClick}>
      <StyledCarouselTabs>
        {Array(user.photos.length)
          .fill(0)
          .map((_, i) => (
            <StyledCarouselTab
              isFocused={focusedIdx === i}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                console.log(e);

                setFocusedIdx(i);
              }}
            ></StyledCarouselTab>
          ))}
      </StyledCarouselTabs>

      <Sliders
        focusedIdx={focusedIdx}
        css={css`
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        `}
      >
        {user.photos?.map((imgURL, i) => (
          <div>
            <img src={imgURL} alt={imgURL} />
          </div>
        ))}
      </Sliders>
      <div
        css={css`
          padding: 10px;
          position: absolute;
          z-index: 2;
          bottom: 0;
          width: 100%;
        `}
      >
        <div css={css``}>
          <div
            css={css`
              ${s.row}
              ${s.bold}
              ${s.h18}

              * {
                margin-right: 2px;
              }
              svg {
                width: 12px;
              }
            `}
          >
            <div>{[user.nickname, user.age].join(",")}</div>
            {user.isOnline && (
              <CheckCircleIcon
                css={css`
                  color: green;
                `}
              />
            )}
            {Object.keys(user).length > 10 && <ProfileDetail />}
          </div>
          <div>{[user.job, user.location.name].join(" . ")}</div>
          <div
            css={css`
              color: ${s.colors.grey[400]};
            `}
          >
            {[
              user.smokingFreq === 1
                ? "흡연"
                : user.smokingFreq === 0.5
                ? "흡연 가끔"
                : user.smokingFreq === 0
                ? "흡연 안함"
                : "",
              `${user.height}cm`,
            ].join(" . ")}
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            ${s.rowCenter};
            margin-top: 10px;

            button {
              height: 45px;
              width: 45px;
              margin-right: 4px;
            }

            button:last-of-type {
              margin-right: 0;
            }

            svg {
              font-size: 18px;
              margin-top: -2px;
            }
          `}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            theme="grey"
          >
            <CloseIcon />
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            css={css`
              flex: 1;
            `}
          >
            좋아요
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <StarIcon />
          </Button>
        </div>
      </div>
      <div
        css={css`
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-shadow: inset 0 30px 10px rgba(0, 0, 0, 0.2),
            inset 0 -80px 30px rgba(0, 0, 0, 0.4);
        `}
      ></div>
    </StyledProfileCardWithCarousel>
  ) : null;
}
