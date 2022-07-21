import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import impromptu from '../../imgs/impromptu.svg';
import prevarrowblack from '../../imgs/prevarrowblack.svg';
import nextarrowblack from '../../imgs/nextarrowblack.svg';

export const Box = styled.div`
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  height: 22vw;
`;

export const ImpromptuText = styled.div`
  width: 60%;
  margin-left: 20%;
  padding: 1.5vw 0vw;

  font-style: normal;
  font-weight: 700;
  font-size: 1.2vw;
  line-height: 1.5vw;
`;

export const ImpromptuImg = styled.img.attrs({
  src: impromptu,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const ImproptuPrevArrow = styled.img.attrs({
  src: prevarrowblack,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const ImproptuNextArrow = styled.img.attrs({
  src: nextarrowblack,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const StyledSlider = styled(Slider)`
  margin-left: 19%;
  width: 60%;
  text-align: center;

  .slick-list {
    overflow: hidden;
    height: 15.5vw;
    text-align: center;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }
`;

export const Text = styled.div`
  width: 16vw !important;
  height: 13vw;
  background: #333333;
  border-radius: 0.625vw;

  list-style: none;
  color: #ffffff;

  font-size: 1.25vw;
  font-weight: 700;
  line-height: 1.3;

  padding: 5%;
`;
