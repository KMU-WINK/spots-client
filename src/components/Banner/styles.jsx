import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logowhite from '../../imgs/logowhite.svg';
import prevarrowwhite from '../../imgs/prevarrowwhite.svg';
import nextarrowwhite from '../../imgs/nextarrowwhite.svg';

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1920px;
  .slick-list {
    height: 465px;
  }

  .slick-dots {
    width: 100%;
    bottom: 23px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 10px;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 20px;
    height: 14px;
  }

  .slick-prev {
    left: 40px;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: 40px;
    cursor: pointer;
    &::before {
      content: '';
    }
  }
`;

export const ImproptuPrevArrow = styled.img.attrs({
  src: prevarrowwhite,
})`
  width: 20px;
  height: 14px;
`;

export const ImproptuNextArrow = styled.img.attrs({
  src: nextarrowwhite,
})`
  width: 20px;
  height: 14px;
`;

export const Image = styled.img``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerText = styled.div`
  position: absolute;
  padding-left: 20%;
  padding-top: 5%;
  color: white;
`;

export const BannerText1 = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const BannerText2 = styled.div`
  font-size: 50px;
  margin-bottom: 36px;
  font-weight: 700;
`;
export const BannerLogo = styled.img.attrs({
  src: logowhite,
})`
  position: absolute;
  width: 395px;
  right: 10%;
  top: 287px;
`;

export const BannerBtn = styled.button`
  width: 176px;
  height: 48px;
  //margin-left: 0.5vw;
  //margin-top: 1vw;
  background: #ffffff;
  border: 0;
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-size: 20px;
  font-weight: 700;
  color: #333333;
  cursor: pointer;
`;
