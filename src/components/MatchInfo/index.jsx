import React from 'react';
import * as styled from './styles';

const MatchInfo = () => {
  return (
    <styled.Container>
      <styled.MatchDiv>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>모집중</span>
          <styled.Toggle />
        </styled.TextDiv>
      </styled.MatchDiv>

      <styled.MatchDiv>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>모집중</span>
          <styled.Toggle />
        </styled.TextDiv>
      </styled.MatchDiv>

      <styled.MatchDiv>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭확정</span>
          <styled.Toggle />
        </styled.TextDiv>
      </styled.MatchDiv>

      <styled.MatchDivOpen>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭확정</span>
          <styled.Toggle />
        </styled.TextDiv>
        <styled.MatchingTitle>매칭 지원자</styled.MatchingTitle>
        <styled.InnerDiv1>
          <styled.InnerDiv1Left>
            <div>
              <styled.MatchingCount>
                <span>8</span>
                <span>명이 지원했어요.</span>
              </styled.MatchingCount>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <styled.ProgressBarWrap>
                  <styled.InnerDivLevel width={'70%'}>
                    <div></div>
                    <div></div>
                  </styled.InnerDivLevel>
                  <span>지원자의 평균 레벨 : 중상</span>
                </styled.ProgressBarWrap>
                <styled.ProgressBarWrap>
                  <styled.InnerDivLevel width={'25%'}>
                    <div></div>
                    <div></div>
                  </styled.InnerDivLevel>
                  <span>지원자의 평균 연령 : 20대 초반</span>
                </styled.ProgressBarWrap>
              </div>
            </div>
            <div></div>
          </styled.InnerDiv1Left>
        </styled.InnerDiv1>
        <styled.ApplicantWrap>
          <div>
            <styled.ApplicantList>
              <styled.InnerToggle>
                <span>지원자이름1</span>
                <span>여</span>
                <span>하</span>
                <span>서초 1동</span>
                <styled.InnerToggleBtn />
              </styled.InnerToggle>
              <styled.buttons>
                <button>승인</button>
                <button>거절</button>
              </styled.buttons>
            </styled.ApplicantList>
            <styled.ApplicantList>
              <styled.InnerToggle>
                <span>지원자이름1</span>
                <span>여</span>
                <span>하</span>
                <span>서초 1동</span>
                <styled.InnerToggleBtn />
              </styled.InnerToggle>
              <styled.buttons>
                <button>승인</button>
                <button>거절</button>
              </styled.buttons>
            </styled.ApplicantList>
            <styled.ApplicantList>
              <styled.InnerToggle>
                <span>지원자이름1</span>
                <span>여</span>
                <span>하</span>
                <span>서초 1동</span>
                <styled.InnerToggleBtn />
              </styled.InnerToggle>
              <styled.buttons>
                <button>승인</button>
                <button>거절</button>
              </styled.buttons>
            </styled.ApplicantList>
            <styled.ApplicantList>
              <styled.InnerToggle>
                <span>지원자이름1</span>
                <span>여</span>
                <span>하</span>
                <span>서초 1동</span>
                <styled.InnerToggleBtn />
              </styled.InnerToggle>
              <styled.buttons>
                <button>승인</button>
                <button>거절</button>
              </styled.buttons>
            </styled.ApplicantList>
            <styled.ApplicantList>
              <styled.InnerToggle>
                <span>지원자이름1</span>
                <span>여</span>
                <span>하</span>
                <span>서초 1동</span>
                <styled.InnerToggleBtn />
              </styled.InnerToggle>
              <styled.buttons>
                <button>승인</button>
                <button>거절</button>
              </styled.buttons>
            </styled.ApplicantList>
          </div>
          <styled.moreApplicant>지원자 더보기</styled.moreApplicant>
        </styled.ApplicantWrap>
      </styled.MatchDivOpen>

      <styled.MatchDiv>
        <styled.TextDiv color={'#858585'}>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭취소</span>
          <styled.Toggle />
        </styled.TextDiv>
      </styled.MatchDiv>
    </styled.Container>
  );
};

export default MatchInfo;
