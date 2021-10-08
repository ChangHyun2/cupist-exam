import s from "csd";
import { useState } from "react";
import styled from "@emotion/styled";

import Sliders from "@components/Sliders";
import Tabs from "@components/Tabs";
import Tab from "@components/Tab";
import SearchUsers from "@components/SearchUsers";
import FilterListIcon from "@mui/icons-material/FilterList";

const Pane1 = () => {
  return <div>1</div>;
};
const Pane2 = () => {
  return <div>2</div>;
};
const Pane3 = () => {
  return <div>3</div>;
};

const StyledTabs = styled(Tabs)`
  width: 150px;

  li {
    width: 33.33%;
    padding: 5px 0;

    button {
      ${s.typo.h14};
      ${s.typo.bold};
    }
  }
`;

const StyledHomePage = styled.div`
  position: relative;
  width: 100%;

  header {
    padding: 10px 10px 0 10px;
    width: 100%;
    ${s.rowSpaceBetween};
    border-bottom: 1px solid ${s.colors.grey[50]};
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
      <Sliders focusedIdx={focusedIdx}>
        <Pane1 />
        <Pane2 />
        <Pane3 />
      </Sliders>
    </StyledHomePage>
  );
}
