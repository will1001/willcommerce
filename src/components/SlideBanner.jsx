import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Image = styled.img`
  height: 90%;
  /* width: 96%; */
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  :hover {
    background-color: #f36c4f;
    color: white;
    transition-duration: 400ms;
  }
`;

const slideImg = [
  {
    img: "https://i.ibb.co/zW3FPq9/pexels-andrea-piacquadio-842811-removebg-preview.png",
    title: "BIG SALE",
    desc: "GET 10% EXTRA DISCOUNT FOR FIRST ORDER.",
    bg: "fcf1ed",
  },
  {
    img: "https://i.ibb.co/QFq819S/pexels-spencer-selover-428338-removebg-preview.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    img: "https://i.ibb.co/b2sRJNy/pexels-vesna-mladenovic-814194-removebg-preview.png",
    title: "WEEKEND SPECIAL",
    desc: "FREE SHIPING ON ALL ORDERS,DISCOUNT UP TO 70%.",
    bg: "CDDEFF",
  },
];
const SlideBanner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
      }}
    >
      {slideImg.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideBanner;
