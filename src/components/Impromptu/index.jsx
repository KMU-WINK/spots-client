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
      <styled.ImpromptuText>
        오늘 뜬 번개 모임 : <styled.ImpromptuImg />
      </styled.ImpromptuText>
      <styled.StyledSlider {...settings}>
        <styled.Text>모임 이름</styled.Text>
        <styled.Text>모임 이름</styled.Text>
        <styled.Text>모임 이름</styled.Text>
        <styled.Text>모임 이름</styled.Text>
        <styled.Text>모임 이름</styled.Text>
        <styled.Text>모임 이름</styled.Text>
      </styled.StyledSlider>
    </styled.Box>
  );
};

export default Impromptu;
