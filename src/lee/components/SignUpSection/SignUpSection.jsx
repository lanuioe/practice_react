import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUpSection() {
  return (
    <Section>
      <p>회원가입</p>
      <Divider></Divider>
      <Link to="/Login/Page">로그인</Link>
      <Divider></Divider>
      <p>
        고객센터 <img src="/assets/HeaderIcon/ic-down.svg" alt="고객센터" />
      </p>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: end;
  max-width: 1050px;
  margin-bottom: 21px;
`;

const Divider = styled.div`
  border-left: 1px solid #d9d9d9;
  height: 13px;
  margin: 0 12px;
`;

export default SignUpSection;
