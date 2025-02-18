import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Section>
      <Title>로그인</Title>
      <Form action="/" method="POST">
        <Input
          type="text"
          id="id"
          name="id"
          required
          placeholder="아이디를 입력해주세요"
        />
        <Input
          type="password"
          id="id"
          name="password"
          minLength={"6"}
          maxLength={"12"}
          required
          placeholder="비밀번호를 입력해주세요"
        />
        <Div>
          <Link to="/">아이디 찾기</Link>
          <span></span>
          <Link to="/">비밀번호 찾기</Link>
        </Div>
        <Button type="submit" bgColor={"#5d4436"}>
          <span>로그인</span>
        </Button>
        <Button type="button" bgColor={"#A07C68"} onClick={handleClick}>
          <span>회원가입</span>
        </Button>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  margin: auto;
  width: 340px;
`;

const Title = styled.h2`
  margin: 100px 0 44px 0;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  margin-bottom: 12px;
  padding-left: 20px;
`;

// * Link태그 CSS할때 방법
// const Find = styled(Link)`
//   color: red;
// `;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  margin-bottom: 28px;

  & span {
    border-right: 1px solid;
    margin: 3px 6px 0 6px;
  }
`;

const Button = styled.button`
  background: ${(props) => props.bgColor};
  height: 50px;
  border: 1px solid;
  border-radius: 4px;
  margin-bottom: 12px;
  cursor: pointer;
`;

//* 같은거 겹치면서 추가적으로 할때
// const Join = styled(Button)`
//   display: block;
//   text-align: center;
//   line-height: 50px;
// `;

export default Login;
