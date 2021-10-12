import s from "csd";
import { useState } from "react";
import styled from "@emotion/styled";

import RecommendUsers from "@components/RecommendUsers";
import Sliders from "@components/UI/Sliders";
import Tabs from "@UI/Tabs";
import Tab from "@UI/Tab";
import FilterListIcon from "@mui/icons-material/FilterList";

const Pane2 = () => {
  return <div>Slider2</div>;
};
const Pane3 = () => {
  return <div>Slider3</div>;
};

const StyledTabs = styled(Tabs)`
  width: 50%;

  li {
    width: 33.33%;
    padding: 5px 0;

    button {
      white-space: nowrap;

      ${s.h16};
      ${s.bold};
    }
  }
`;

const StyledHomePage = styled.div`
  width: 100%;

  header {
    position: sticky;
    top: 0;
    background-color: ${s.colors.white};
    z-index: 1;
    padding: 10px 10px 0 10px;
    ${s.rowSpaceBetween};
    border-bottom: 1px solid ${s.colors.grey[50]};
    width: 100%;
  }

  main {
    position: relative;
    width: 100%;
    contain: content;
  }
`;

export default function HomePage() {
  const [focusedIdx, setFocusedIdx] = useState(0);

  return (
    <StyledHomePage>
      <header>
        <StyledTabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
          <Tab title="glam" />
          <Tab title="근처" />
          <Tab title="라이브" />
        </StyledTabs>
        <div>
          <FilterListIcon />
        </div>
      </header>
      <main>
        <Sliders focusedIdx={focusedIdx}>
          <RecommendUsers />
          <Pane2 />
          <Pane3 />
        </Sliders>
      </main>
    </StyledHomePage>
  );
}
