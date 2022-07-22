import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as styled from './styles';

const MatchingPage = () => {
  const [isShowHost, setIsShowHost] = useState(false);
  const [isShowCondition, setIsShowCondition] = useState(false);

  // "호스트 소개" 펼쳤을 때
  const HostContents = () => (
    <>
      <styled.HostBoldText>호스트 평점</styled.HostBoldText>
      <styled.HostBoldText>호스트 응답률</styled.HostBoldText>
      <styled.HostBoldText>호스트 소개글</styled.HostBoldText>
      <styled.HostLightText>
        안녕하세요 저는 운동을 좋아하는 김삐삐입니다
        <br />
        운동 같이 할 사람 찾느라 힘들었는데 여기서 같이 운동 재밌게 해봐요!
      </styled.HostLightText>
      <styled.HostBoldText>호스트가 선호하는 운동</styled.HostBoldText>
      <styled.HostBoldText>호스트 보유 뱃지</styled.HostBoldText>
    </>
  );

  // "매칭 조건" 펼쳤을 때
  const ConditionContents = () => (
    <styled.Labels>
      <styled.Label>서초 1동</styled.Label>
      <styled.Label>여자만</styled.Label>
      <styled.Label>레벨 하</styled.Label>
    </styled.Labels>
  );

  return (
    <>
      <Header />
      <styled.Background />

      <styled.MatchingPageBox>
        <styled.Box1>
          <styled.Container>
            <styled.FlexBox>
              <styled.Text1>모집 현황</styled.Text1>
              <styled.Text7>마감일까지 00일 남았어요.</styled.Text7>
            </styled.FlexBox>

            <styled.Member>
              <styled.People />
              <styled.Text2>현재 인원 (2/4)</styled.Text2>
            </styled.Member>
            <styled.Progress />
          </styled.Container>

          <styled.Container>
            <styled.Text1>시간</styled.Text1>

            <styled.TimeContent>
              <styled.Watch />
              <styled.Text3>22년 07월 08일 17:00</styled.Text3>
            </styled.TimeContent>

            <styled.Text1>매칭 장소</styled.Text1>

            <styled.LocationContent>
              <styled.Place />
              <styled.Text6>성북구 솔샘로 44 정릉생활관</styled.Text6>
            </styled.LocationContent>
          </styled.Container>

          <styled.Container>
            <styled.DropdownTitle>
              <styled.Text1>매칭 조건</styled.Text1>
              <styled.Button
                onClick={() => setIsShowCondition(!isShowCondition)}
              />
            </styled.DropdownTitle>

            {isShowCondition ? <ConditionContents /> : null}
          </styled.Container>

          <styled.Container>
            <styled.DropdownTitle>
              <styled.Text1>호스트 소개</styled.Text1>
              <styled.Button onClick={() => setIsShowHost(!isShowHost)} />
            </styled.DropdownTitle>

            {isShowHost ? <HostContents /> : null}
          </styled.Container>
        </styled.Box1>

        <styled.SideBar>
          <styled.SideBarTitle>
            <styled.FlexBox>
              <styled.Watch />
              <styled.Text3>22년 07월 08일 17:00</styled.Text3>
            </styled.FlexBox>
          </styled.SideBarTitle>

          <ConditionContents />
        </styled.SideBar>
      </styled.MatchingPageBox>
      <Footer />
    </>
  );
};

export default MatchingPage;
