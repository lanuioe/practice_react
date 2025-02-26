import styled from "styled-components";

function TopBanner() {
  return (
    <>
      <Banner>
        지금 가입하고, <b>최대 1만원 할인 쿠폰</b> 받아가세요!
        <DeleteButton>
          <img
            src="/assets/HeaderIcon/ic-delete.svg"
            width={20}
            height={20}
            alt="topBannerCloseBtn"
          />
        </DeleteButton>
      </Banner>
    </>
  );
}

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  height: 50px;
  background: #5f0080;
  color: #ffffff;

  b {
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 340px;
  background-color: #5f0080;
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
`;

export default TopBanner;
