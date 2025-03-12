import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import styled from "styled-components";

function SwiperBox() {
  return (
    <BoxWrapper>
      <ProductHeader>이 상품은 어때요?</ProductHeader>
      <Swiper modules={[Navigation]} navigation={true} slidesPerView={4}>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product01.jpg"
            alt="product list-1"
            width={250}
            height={320}
          />
          <p>[풀무원]</p> {/* 예시로 적어 놓은것 */}
          <p>탱탱쫄면</p>
          <p>4980원</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product02.jpg"
            alt="product list-2"
            width={250}
            height={320}
          />
          <p>풀무원</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product03.jpg"
            alt="product list-3"
            width={250}
            height={320}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product04.jpg"
            alt="product list-4"
            width={250}
            height={320}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product01.jpg"
            alt="product list-1"
            width={250}
            height={320}
          />
          <p>시험 삼아 여러개 만듬</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product01.jpg"
            alt="product list-1"
            width={250}
            height={320}
          />
          <p>시험 삼아 여러개 만듬</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/MainSwiperBox/product01.jpg"
            alt="product list-1"
            width={250}
            height={320}
          />
          <p>시험 삼아 여러개 만듬</p>
        </SwiperSlide>
      </Swiper>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const ProductHeader = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: x-large;
  /* width: 192px;
  height: 56px; */
  margin: 40px 0 28px 0;
`;

export default SwiperBox;
