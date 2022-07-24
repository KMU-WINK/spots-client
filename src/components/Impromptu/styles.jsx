import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import impromptu from '../../imgs/impromptu.svg';
import prevarrowblack from '../../imgs/prevarrowblack.svg';
import nextarrowblack from '../../imgs/nextarrowblack.svg';
import meetingicon from '../../imgs/meetingicon.svg';

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
  position: relative;
  width: 1.25vw;
  height: 1.25vw;
  top: 0.2vw;
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

export const MeetingBox = styled.div`
  width: 16vw !important;
  height: 13vw;
  background: #333333;
  border-radius: 0.625vw;

  padding: 5%;
`;

export const MeetingName = styled.div`
  color: #ffffff;
  font-size: 1.25vw;
  font-weight: 700;
  line-height: 1.3;
  padding-top: 1.5vw;
`;

export const MeetingDate = styled.div`
  color: #fb1e53;
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 1.8vw;
  line-height: 3vw;
  letter-spacing: -0.05em;
`;

export const MeetingPlace = styled.div`
  color: #ffffff;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.8vw;
  letter-spacing: -0.05em;
`;

export const MeetingStatus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.5vw;
`;

export const MeetingIcon = styled.img.attrs({
  src: meetingicon,
})`
  width: 1.25vw;
  height: 1.25vw;
`;

export const MeetingBar = styled.div`
  width: 14vw;
  height: 1vw;
  background: #ffffff;
  border-radius: 0.8vw;
`;

export const MeetingBarStatus = styled.div`
  width: ${props => props.width};
  height: 1vw;
  background: #fb1e53;
  border-radius: 0.8vw;
`;

export const MeetingNumber = styled.div`
  color: #ffffff;
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 1.6vw;
  line-height: 2vw;
  letter-spacing: -0.05em;
  padding-top: 0.5vw;
`;
