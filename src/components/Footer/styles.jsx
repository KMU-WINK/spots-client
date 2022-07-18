import React from 'react';
import styled from 'styled-components';
import logowhite from '../../imgs/logowhite.svg';

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;

const Logo = styled.img.attrs({
  src: logowhite,
})`
  width: 6.5vw;
  padding-top: 3vw;
`;

const Info = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 50px;
  line-height: 200%;
  font-size: 1vw;
  padding-bottom: 3vw;
`;

const Connact = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 7vw;
  padding-right: 7vw;
  line-height: 200%;
  font-size: 1vw;
  border-left: 0.5px solid #d9d9d9;
  text-decoration: underline;
  cursor: pointer;
`;

const FooterBox = () => (
  <Box>
    <Info>
      <Logo />
      <br />
      스포츠 팀원 매칭 서비스 Spot:s는 함계하는 즐거움을 바탕으로
      <br />
      건강한 스포츠 문화를 만들기 위해 고민합니다.
      <br />
      쉽고 빠르게 운동을 함께 할 친구를 구할 수 있도록 하며
      <br />더 많은 사람이 더 즐겁게 운동할 수 있도록 최선을 다합니다.
    </Info>
    <Connact>
      소셜미디어
      <br />
      매칭 찾기
      <br />
      매칭 올리기
    </Connact>
  </Box>
);

export default FooterBox;
