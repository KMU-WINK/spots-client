import styled, { keyframes, css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  .slick-list {
    height: 24vw;
    background: green;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    width: 100%;
    bottom: 2vw;
  }
`;

export default StyledSlider;
