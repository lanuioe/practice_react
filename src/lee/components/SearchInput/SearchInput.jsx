import styled from "styled-components";

function SearchInput() {
  return (
    <div>
      <Form action="/">
        <Input type="text" placeholder="검색어를 입력해주세요" />
        <Button>
          <img src="/assets/SearchButton/Search.svg" alt="search button" />
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  margin: 0 0 0 63px;
  width: 400px;
  height: 60px;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid #5f0080;

  &::placeholder {
    color: #898989;
    font-size: 16px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  bottom: 10px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

export default SearchInput;
