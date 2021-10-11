import styled from "@emotion/styled";
import s from "csd";

const Divider = styled.div`
  width: 100%;
  border: none;
  height: 0;
  line-height: 0;
  border-bottom: 1px solid ${s.colors.grey[100]};
  box-shadow: 0 0 1px ${s.colors.grey[200]};
`;

export default Divider;
