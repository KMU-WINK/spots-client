import React, { useEffect, useState } from 'react';
import * as styled from './styles';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <styled.Nav>
        <styled.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </styled.Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <styled.Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </styled.Button>
          ))}
        <styled.Button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </styled.Button>
      </styled.Nav>
    </>
  );
};

const ClickedMatchingMenu = () => {
  const labelStyle = {
    textAnchor: 'middle',
    transform: 'rotate(90,150,0)',
  };
  const myData = [
    {
      angle: 2,
      label: '여자 40%',
      labelStyle: labelStyle,
      x: 100,
    },
    { x: 10, y: 10, angle: 3, label: '남자 60%', labelStyle: labelStyle },
  ];
  const color = ['#FB1E53', '#D9D9D9'];
  return (
    <styled.ClickedMatchingBox>
      <styled.ClickedBox>
        <styled.MatchingName>모임 이름</styled.MatchingName>
        <styled.MatchingDate>07.08 / 17:00</styled.MatchingDate>
        <styled.MatchingPlace>모임 장소</styled.MatchingPlace>
        <styled.MatchIcon />
        <styled.MatchingNumber>인원 (5/5)</styled.MatchingNumber>
        <styled.MatchingStatus>매칭확정</styled.MatchingStatus>
        <styled.UpIcon />
      </styled.ClickedBox>
      <styled.ClickedBox>
        <styled.ClickedLine></styled.ClickedLine>
      </styled.ClickedBox>
      <styled.ClickedBox>
        <styled.ClickedCondition>매칭 조건</styled.ClickedCondition>
        <styled.ClickedConditionBtn>서초 1동</styled.ClickedConditionBtn>
        <styled.ClickedConditionBtn>여자만</styled.ClickedConditionBtn>
        <styled.ClickedConditionBtn>레벨 하</styled.ClickedConditionBtn>
      </styled.ClickedBox>
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트 소개</styled.ClickedHost>
        <styled.HostInfo />
        <styled.ClickedHostInfo>김삐삐 님을 소개할게요</styled.ClickedHostInfo>
      </styled.ClickedHostBox>
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트 평점</styled.ClickedHost>
        <styled.HostGrade />
        <styled.HostGrade />
        <styled.HostGrade />
        <styled.HostGrade />
        <styled.HostGrade />
      </styled.ClickedHostBox>
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트 응답률</styled.ClickedHost>
        <styled.ClickedHostResponse>100%</styled.ClickedHostResponse>
      </styled.ClickedHostBox>
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트 소개글</styled.ClickedHost>
      </styled.ClickedHostBox>
      <styled.ClickedHostInfoText>
        안녕하세요 저는 운동을 좋아하는 김삐삐 입니다.
        <br />
        운동 같이 할 사람 찾느라 힘들었는데 여기서 같이 운동 재밌게 해봐요!
      </styled.ClickedHostInfoText>
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트가 선호하는 운동</styled.ClickedHost>
      </styled.ClickedHostBox>
      <styled.BasketballIcon />
      <styled.RugbyIcon />
      <styled.SoccerIcon />
      <styled.TennisIcon />
      <styled.ClickedHostBox>
        <styled.ClickedHost>호스트 보유 뱃지</styled.ClickedHost>
      </styled.ClickedHostBox>
      <styled.ClickedBox>
        <styled.HostBadge />
        <styled.ContactHost>호스트에게 연락하기</styled.ContactHost>
      </styled.ClickedBox>
      <styled.ClickedHostBox>
        <styled.ClikedApplied>매칭 지원자</styled.ClikedApplied>
      </styled.ClickedHostBox>
      <styled.ClickedHostBox>
        <styled.ClickedBox>
          <styled.ClickedRadialChart>
            <styled.Chart
              data={myData}
              width={263.66}
              height={263.66}
              colorRange={color}
              showLabels={true}
            />
            <styled.GenderRatio>남녀 성비</styled.GenderRatio>
          </styled.ClickedRadialChart>
          <div>
            <styled.AppliedMenu>
              <styled.AppliedMenuName>지원자이름1</styled.AppliedMenuName>
              <styled.AppliedMenuInfo>여</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>하</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>서초1동</styled.AppliedMenuInfo>
            </styled.AppliedMenu>
            <styled.AppliedMenu>
              <styled.AppliedMenuName>지원자이름1</styled.AppliedMenuName>
              <styled.AppliedMenuInfo>남</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>중</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>서초2동</styled.AppliedMenuInfo>
            </styled.AppliedMenu>
            <styled.AppliedMenu>
              <styled.AppliedMenuName>지원자이름1</styled.AppliedMenuName>
              <styled.AppliedMenuInfo>여</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>중</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>서초2동</styled.AppliedMenuInfo>
            </styled.AppliedMenu>
            <styled.AppliedMenu>
              <styled.AppliedMenuName>지원자이름1</styled.AppliedMenuName>
              <styled.AppliedMenuInfo>남</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>중</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>서초2동</styled.AppliedMenuInfo>
            </styled.AppliedMenu>
            <styled.AppliedMenu>
              <styled.AppliedMenuName>지원자이름1</styled.AppliedMenuName>
              <styled.AppliedMenuInfo>남</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>중</styled.AppliedMenuInfo>
              <styled.AppliedMenuInfo>서초1동</styled.AppliedMenuInfo>
            </styled.AppliedMenu>
          </div>
        </styled.ClickedBox>
      </styled.ClickedHostBox>
    </styled.ClickedMatchingBox>
  );
};

const MatchingMenu = props => {
  const id = props.id;
  const [currentClick, setCurrentClick] = useState('');
  const openState = [true, false, true, false, true];

  const ChangeMenu = e => {
    setCurrentClick(id);
  };

  useEffect(
    e => {
      console.log(id);
    },
    [currentClick],
  );

  return (
    <>
      {props.cancel ? (
        <styled.CancelMatchingBox>
          <styled.MatchingName opacity="0.4">모임 이름</styled.MatchingName>
          <styled.MatchingDate opacity="0.4">07.08 / 17:00</styled.MatchingDate>
          <styled.MatchingPlace opacity="0.4">모임 장소</styled.MatchingPlace>
          <styled.MatchIcon opacity="0.4" />
          <styled.MatchingNumber opacity="0.4">
            인원 (5/5)
          </styled.MatchingNumber>
          <styled.MatchingStatus opacity="0.4">매칭취소</styled.MatchingStatus>
          <styled.DownIcon />
        </styled.CancelMatchingBox>
      ) : (
        <styled.MatchingBox onClick={ChangeMenu} id={id}>
          <styled.MatchingName> 모임 이름</styled.MatchingName>
          <styled.MatchingDate>07.08 / 17:00</styled.MatchingDate>
          <styled.MatchingPlace>모임 장소</styled.MatchingPlace>
          <styled.MatchIcon />
          <styled.MatchingNumber>인원 (5/5)</styled.MatchingNumber>
          <styled.MatchingStatus>매칭확정</styled.MatchingStatus>
          <styled.DownIcon />
        </styled.MatchingBox>
      )}
    </>
  );
};

const AppliedMatching = () => {
  const [page, setPage] = useState(1);

  return (
    <styled.Container>
      <MatchingMenu cancel={false} id="1" />
      <MatchingMenu cancel={true} id="2" />
      <ClickedMatchingMenu />
      <MatchingMenu cancel={false} id="3" />
      <MatchingMenu cancel={false} id="4" />
      <MatchingMenu cancel={false} id="5" />
      <Pagination total={30} limit={9} page={page} setPage={setPage} />
    </styled.Container>
  );
};

export default AppliedMatching;
