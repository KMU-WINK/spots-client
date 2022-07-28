import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logowhite from '../../imgs/logowhite.svg';
import prevarrowwhite from '../../imgs/prevarrowwhite.svg';
import nextarrowwhite from '../../imgs/nextarrowwhite.svg';

export const StyledSlider = styled(Slider)`
  .slick-list {
    height: 24vw;
  }

  .slick-dots {
    width: 100%;
    bottom: 1vw;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 0.5vw;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: 2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: 2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }
`;

export const ImproptuPrevArrow = styled.img.attrs({
  src: prevarrowwhite,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const ImproptuNextArrow = styled.img.attrs({
  src: nextarrowwhite,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const BannerText = styled.div`
  position: absolute;
  left: 20vw;
  top: 4vw;
  color: white;
`;

export const BannerText1 = styled.div`
  font-size: 1.5vw;
  padding: 0.5vw;
`;

export const BannerText2 = styled.div`
  font-size: 3vw;
  padding: 0.5vw;
  font-weight: 700;
`;
export const BannerLogo = styled.img.attrs({
  src: logowhite,
})`
  position: absolute;
  width: 20vw;
  left: 57vw;
  top: 13vw;
`;

export const BannerBtn = styled.button`
  width: 10vw;
  height: 2.5vw;
  margin-left: 0.5vw;
  margin-top: 1vw;
  background: #ffffff;
  border: 0;
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-size: 1vw;
  font-weight: 700;
  color: #333333;
  cursor: pointer;
`;
