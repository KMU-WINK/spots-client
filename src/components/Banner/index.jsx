import React, { Component } from 'react';
import * as styled from './styles';

const items = [
  { id: 1, url: 'src/imgs/Rectangle 1890.svg' },
  { id: 2, url: 'src/imgs/Rectangle 1891.svg' },
  { id: 2, url: 'src/imgs/Rectangle 1892.svg' },
  { id: 2, url: 'src/imgs/Rectangle 1894.svg' },
];

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <styled.ImproptuNextArrow />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <styled.ImproptuPrevArrow />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    //autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <styled.StyledSlider {...settings}>
      {items.map(item => {
        return (
          <div key={item.id}>
            <styled.ImageContainer>
              <styled.BannerText>
                <styled.BannerText1>
                  운동친구 구하는 사람 주목!
                </styled.BannerText1>
                <styled.BannerText2>
                  <div>가장 쉽고 빠른 </div>
                  <div>운동메이트 매칭 플랫폼,</div>
                </styled.BannerText2>
                <div>
                  <styled.BannerBtn>모임만들기</styled.BannerBtn>
                </div>
              </styled.BannerText>
              <styled.BannerLogo />
              <styled.Image src={item.url} />
            </styled.ImageContainer>
          </div>
        );
      })}
    </styled.StyledSlider>
  );
};

export default Banner;
