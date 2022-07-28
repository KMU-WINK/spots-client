import React from 'react';
import styled from 'styled-components';
import logowhite from '../../imgs/logowhite.svg';

const Box = styled.div`
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 354px;
  width: 100%;
  max-width: 1920px;
`;

const Logo = styled.img.attrs({
  src: logowhite,
})`
  width: 123px;
`;

const Info = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 61px;
  padding-bottom: 93px;
  line-height: 260%;
  font-size: 14px;
`;

const Connact = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 55px;
  padding-bottom: 56px;
  padding-left: 130px;
  line-height: 260%;
  font-size: 16px;
  font-weight: 700;
  border-left: 0.5px solid #d9d9d9;
  text-decoration: underline;
  cursor: pointer;
`;

const FooterBox = () => (
  <Box>
    <BoxContainer>
      <Info>
        <Logo />
        <br />
        스포츠 팀원 매칭 서비스 Spot:s는 함께하는 즐거움을 바탕으로
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
    </BoxContainer>
  </Box>
);

export default FooterBox;
