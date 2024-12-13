import { Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.ul`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: #121212;
  color: #fefefe;

  & li {
    font-size: 24px;
  }
`;

const Home = () => {
  return (
    <Flex>
      <li>
        <Link to="/">현지</Link>
      </li>
      <li>
        <Link to="/">정현</Link>
      </li>
    </Flex>
  );
};

export default Home;
