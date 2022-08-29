import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import impromptu from '../../imgs/impromptu.svg';
import prevarrowblack from '../../imgs/prevarrowblack.svg';
import nextarrowblack from '../../imgs/nextarrowblack.svg';
import meetingicon from '../../imgs/meetingicon.svg';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  height: 440px;
  width: 100%;
  padding: 41px 0px 50px 0px;
`;

export const BoxContainer = styled.div`
  width: 1250px;
`;

export const ImpromptuText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
`;

export const ImpromptuImg = styled.img.attrs({
  src: impromptu,
})`
  width: 24px;
  height: 24px;
  margin-left: 4px;
`;

export const ImproptuPrevArrow = styled.img.attrs({
  src: prevarrowblack,
})`
  width: 20px;
  height: 14px;
`;

export const ImproptuNextArrow = styled.img.attrs({
  src: nextarrowblack,
})`
  width: 20px;
  height: 14px;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  text-align: center;

  .slick-list {
    overflow: hidden;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 20px;
    height: 14px;
  }

  .slick-prev {
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    cursor: pointer;
    &::before {
      content: '';
    }
  }
`;

export const MeetingBox = styled.div`
  width: 378px !important;
  background: #333333;
  border-radius: 12px;
  padding: 45px 0px 18px;
  cursor: pointer;
`;

export const MeetingName = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const MeetingDate = styled.div`
  color: #fb1e53;
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.05em;
  margin-bottom: 14px;
`;

export const MeetingPlace = styled.div`
  color: #ffffff;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -0.05em;
  margin-bottom: 31px;
`;

export const MeetingStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const MeetingIcon = styled.img.attrs({
  src: meetingicon,
})`
  width: 23px;
  margin-right: 12px;
`;

export const MeetingBar = styled.div`
  width: 271px;
  height: 17px;
  background: #ffffff;
  border-radius: 15px;
`;

export const MeetingBarStatus = styled.div`
  width: ${props => props?.width || '0px'};
  height: 17px;
  background: #fb1e53;
  border-radius: 15px;
`;

export const MeetingNumber = styled.div`
  color: #ffffff;
  font-family: 'SF Pro';
  font-weight: 700;
  font-size: 30px;
  letter-spacing: -0.05em;
`;
