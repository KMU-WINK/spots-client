import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as styled from './styles';
import $ from 'jquery';

const MatchingPage = () => {
  const [isShowHost, setIsShowHost] = useState(false);
  const [isShowCondition, setIsShowCondition] = useState(false);

  const currentMember = 2;
  const maxMember = 4;

  // toggle
  $(function () {
    $('.condition')
      .off('click')
      .on('click', function () {
        setIsShowCondition(!isShowCondition);
        if (isShowCondition) {
          $('.condition')
            .css('transform', 'rotate(0deg)')
            .css('transition', 'all 0.5s ease-in-out');
        } else {
          $('.condition')
            .css('transform', 'rotate(-180deg)')
            .css('transition', 'all 0.5s ease-in-out');
        }
      });
    $('.host')
      .off('click')
      .on('click', function () {
        setIsShowHost(!isShowHost);
        if (isShowHost) {
          $('.host')
            .css('transform', 'rotate(0deg)')
            .css('transition', 'all 0.5s ease-in-out');
        } else {
          $('.host')
            .css('transform', 'rotate(-180deg)')
            .css('transition', 'all 0.5s ease-in-out');
        }
      });
  });

  // isShowHost
  const HostContents = () => (
    <>
      <styled.ExtraBoldText fontSize="20px" margin="21px 0px 0px 0px">
        호스트 평점
        <styled.StarRating>
          <styled.StarRated>
            <span>
              <styled.iconStarRated />
            </span>
            <span>
              <styled.iconStarRated />
            </span>
            <span>
              <styled.iconStarRated />
            </span>
            <span>
              <styled.iconStarRated />
            </span>
            <span>
              <styled.iconStarRated />
            </span>
          </styled.StarRated>
          <styled.StarEmpty>
            <span>
              <styled.iconStarEmpty />
            </span>
            <span>
              <styled.iconStarEmpty />
            </span>
            <span>
              <styled.iconStarEmpty />
            </span>
            <span>
              <styled.iconStarEmpty />
            </span>
            <span>
              <styled.iconStarEmpty />
            </span>
          </styled.StarEmpty>
        </styled.StarRating>
      </styled.ExtraBoldText>
      <styled.ExtraBoldText fontSize="20px" margin="21px 0px 0px 0px">
        호스트 응답률
      </styled.ExtraBoldText>
      <styled.ExtraBoldText fontSize="20px" margin="21px 0px 0px 0px">
        호스트 소개글
      </styled.ExtraBoldText>
      <styled.MediumText fontSize="16px" margin="8px 0px 0px 0px">
        안녕하세요 저는 운동을 좋아하는 김삐삐입니다
        <br />
        운동 같이 할 사람 찾느라 힘들었는데 여기서 같이 운동 재밌게 해봐요!
      </styled.MediumText>
      <styled.ExtraBoldText fontSize="20px" margin="21px 0px 0px 0px">
        호스트가 선호하는 운동
      </styled.ExtraBoldText>
      <styled.ExtraBoldText fontSize="20px" margin="21px 0px 0px 0px">
        호스트 보유 뱃지
      </styled.ExtraBoldText>
      <styled.ContactButton>호스트에게 연락하기</styled.ContactButton>
    </>
  );

  // isShowCondition
  const ConditionContents = () => (
    <styled.Labels>
      <styled.Label>서초 1동</styled.Label>
      <styled.Label>여자만</styled.Label>
      <styled.Label>레벨 하</styled.Label>
    </styled.Labels>
  );

  return (
    <styled.Box2>
      <Header />
      <styled.Background />
      <styled.Matching>
        <styled.Box1>
          <styled.Container>
            <styled.FlexBox>
              <styled.BoldText fontSize="32px">모집 현황</styled.BoldText>
              <styled.NormalText fontSize="20px">
                마감일까지 00일 남았어요.
              </styled.NormalText>
            </styled.FlexBox>
            <styled.Member>
              <styled.People />
              <styled.SemiBoldText fontSize="24px">
                현재 인원 ({currentMember}/{maxMember})
              </styled.SemiBoldText>
            </styled.Member>
            <styled.Progress value={currentMember} max={maxMember} />
          </styled.Container>

          <styled.Container>
            <styled.BoldText fontSize="32px">시간</styled.BoldText>
            <styled.TimeContent>
              <styled.Watch />
              <styled.ExtraBoldText fontSize="24px">
                22년 07월 08일 17:00
              </styled.ExtraBoldText>
            </styled.TimeContent>
            <styled.BoldText fontSize="32px">매칭 장소</styled.BoldText>
            <styled.LocationContent top="24px">
              <styled.Place />
              <styled.MediumText fontSize="24px">
                국민대학교 제1 정릉생활관
              </styled.MediumText>
            </styled.LocationContent>
            <styled.Address left="44px" top="14px">
              <styled.NormalText fontSize="20px">
                서울특별시 성북구 솔샘로 44
              </styled.NormalText>
            </styled.Address>
          </styled.Container>

          <styled.Condition>
            <styled.DropdownTitle>
              <styled.BoldText fontSize="32px">매칭 조건</styled.BoldText>
              <styled.MenuButton className="condition" />
            </styled.DropdownTitle>
            {isShowCondition ? (
              <styled.ConditionBox>
                <ConditionContents />
              </styled.ConditionBox>
            ) : null}
          </styled.Condition>

          <styled.Host>
            <styled.DropdownTitle>
              <styled.BoldText fontSize="32px">호스트 소개</styled.BoldText>
              <styled.MenuButton className="host" />
            </styled.DropdownTitle>
            {isShowHost ? <HostContents /> : null}
          </styled.Host>
        </styled.Box1>

        <styled.QuickMenu className="quickBox">
          <styled.QuickMenuTitle>
            <styled.FlexBox>
              <styled.Watch />
              <styled.ExtraBoldText fontSize="24px">
                22년 07월 08일 17:00
              </styled.ExtraBoldText>
            </styled.FlexBox>
            <styled.LocationContent top="12px">
              <styled.Place />
              <styled.MediumText fontSize="18px">
                국민대학교 제1 정릉생활관
              </styled.MediumText>
            </styled.LocationContent>
            <styled.Address left="44px">
              <styled.NormalText fontSize="16px">
                서울특별시 성북구 솔샘로 44
                <styled.HyperText fontSize="14px">지도 보기</styled.HyperText>
              </styled.NormalText>
            </styled.Address>
          </styled.QuickMenuTitle>
          <styled.QuickMenuContent>
            <ConditionContents />
            <styled.Cost>
              <styled.ExtraBoldText fontSize="24px">
                예상 비용
              </styled.ExtraBoldText>
              <styled.BoldText fontSize="24px">10,000원</styled.BoldText>
            </styled.Cost>
            <styled.Member>
              <styled.People />
              <styled.SemiBoldText fontSize="24px">
                현재 인원 ({currentMember}/{maxMember})
              </styled.SemiBoldText>
            </styled.Member>
            <styled.Progress value={currentMember} max={maxMember} />
            <styled.MatchingButton>매칭 신청하기</styled.MatchingButton>
          </styled.QuickMenuContent>
        </styled.QuickMenu>
      </styled.Matching>
      <Footer />
    </styled.Box2>
  );
};

export default MatchingPage;
