import styled from "styled-components";
import Logo from "../Logo/Logo";

function HeaderSwitch() {
  return (
    <HeaderSwitchWrapper>
      <Logo />
      <div>마켓칼리</div>
      <Divider></Divider>
      <div>뷰티칼리</div>
    </HeaderSwitchWrapper>
  );
}

const HeaderSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Divider = styled.div`
  border-left: 1px solid #d9d9d9;
  height: 14px;
`;

export default HeaderSwitch;
