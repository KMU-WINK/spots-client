import React from 'react';
import * as styled from './styles';

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

const Impromptu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    //autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <styled.Box>
      <styled.BoxContainer>
        <styled.ImpromptuText>
          오늘 뜬 번개 모임 : <styled.ImpromptuImg />
        </styled.ImpromptuText>
        <styled.StyledSlider {...settings}>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="80%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>4/5</styled.MeetingNumber>
          </styled.MeetingBox>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="60%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>3/5</styled.MeetingNumber>
          </styled.MeetingBox>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="40%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>2/5</styled.MeetingNumber>
          </styled.MeetingBox>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="20%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>1/5</styled.MeetingNumber>
          </styled.MeetingBox>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="0%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>0/5</styled.MeetingNumber>
          </styled.MeetingBox>
          <styled.MeetingBox>
            <styled.MeetingName>모임 이름</styled.MeetingName>
            <styled.MeetingDate>07.08/17:00</styled.MeetingDate>
            <styled.MeetingPlace>모임 장소</styled.MeetingPlace>
            <styled.MeetingStatus>
              <styled.MeetingIcon />
              <styled.MeetingBar>
                <styled.MeetingBarStatus width="80%" />
              </styled.MeetingBar>
            </styled.MeetingStatus>
            <styled.MeetingNumber>4/5</styled.MeetingNumber>
          </styled.MeetingBox>
        </styled.StyledSlider>
      </styled.BoxContainer>
    </styled.Box>
  );
};

export default Impromptu;
