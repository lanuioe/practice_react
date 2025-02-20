import styled from "styled-components";

function HeaderIcon() {
  return (
    <HeaderIconWrapper>
      <button>
        <img src="/assets/HeaderIcon/Location.svg" alt="배송지역 아이콘" />
      </button>
      <button>
        <img src="/assets/HeaderIcon/Heart.svg" alt="찜 목록 아이콘" />
      </button>
      <button>
        <img src="/assets/HeaderIcon/Cart.svg" alt="장바구니 아이콘" />
      </button>
    </HeaderIconWrapper>
  );
}

const HeaderIconWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 172px;

  button {
    border: none;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

export default HeaderIcon;
