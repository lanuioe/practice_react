import LogoSection from "../LogoSection/LogoSection";
import styled from "styled-components";
import SearchInput from "../SearchInput/SearchInput";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import SignUpSection from "../SignUpSection/SignUpSection";

function MainHeader() {
  return (
    <>
      <SignUpSection />
      <HeaderWrapper>
        <LogoWrapper>
          <LogoSection />
        </LogoWrapper>
        <SearchInput />
        <HeaderIcon />
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export default MainHeader;
