import s from "csd";
import { useState } from "react";
import styled from "@emotion/styled";

import Sliders from "@components/Sliders";
import Tabs from "@components/Tabs";
import Tab from "@components/Tab";
import SearchUsers from "@components/SearchUsers";

const Pane1 = () => {
  return <div>1</div>;
};
const Pane2 = () => {
  return <div>2</div>;
};
const Pane3 = () => {
  return <div>3</div>;
};

const StyledHomePage = styled.div`
  position: relative;
  width: 100%;
`;

export default function HomePage() {
  const [focusedIdx, setFocusedIdx] = useState(0);

  return (
    <StyledHomePage>
      <Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
        <Tab title="tab1" />
        <Tab title="tab2" />
        <Tab title="tab3" />
      </Tabs>
      <Sliders focusedIdx={focusedIdx}>
        <Pane1 />
        <Pane2 />
        <Pane3 />
      </Sliders>
    </StyledHomePage>
  );
}
