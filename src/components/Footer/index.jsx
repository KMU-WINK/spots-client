import React from 'react';
import * as styled from './styles';

const Footer = () => {
  return (
    <styled.Container>
      <styled.BoxContainer>
        <styled.Info>
          <styled.Logo />
          <br />
          스포츠 팀원 매칭 서비스 Spot:s는 함께하는 즐거움을 바탕으로
          <br />
          건강한 스포츠 문화를 만들기 위해 고민합니다.
          <br />
          쉽고 빠르게 운동을 함께 할 친구를 구할 수 있도록 하며
          <br />더 많은 사람이 더 즐겁게 운동할 수 있도록 최선을 다합니다.
        </styled.Info>
        <styled.Connact>
          소셜미디어
          <br />
          매칭 찾기
          <br />
          매칭 올리기
        </styled.Connact>
      </styled.BoxContainer>
    </styled.Container>
  );
};

export default Footer;
