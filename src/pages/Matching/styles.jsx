import styled from 'styled-components';
import arrow from '../../imgs/arrow right forward.svg';
import watch from '../../imgs/watch_later.svg';
import people from '../../imgs/icon-user-two-mono.svg';
import place from '../../imgs/place.svg';
import background from '../../imgs/Rectangle-1887.svg';
import svgStarRated from '../../imgs/icon-star-rated.svg';
import svgStarEmpty from '../../imgs/icon-star-empty.svg';

import basketball from '../../imgs/icon-basketball.svg';
import rugby from '../../imgs/icon-rugby.svg';
import soccer from '../../imgs/icon-soccer.svg';
import tennis from '../../imgs/icon-tennis.svg';
import baseball from '../../imgs/icon-baseball.svg';
import volleyball from '../../imgs/icon-volleyball.svg';
import badge from '../../imgs/badge.svg';
import map from '../../imgs/map.png';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  div:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export const ContentBox = styled.div`
  width: 662px;
  padding: 39.03px 0px 40.97px 0px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export const NormalText = styled(Text)`
  font-weight: 400;
`;

export const MediumText = styled(Text)`
  font-weight: 500;
`;

export const SemiBoldText = styled(Text)`
  font-weight: 600;
`;

export const BoldText = styled(Text)`
  font-weight: 700;
`;

export const ExtraBoldText = styled(Text)`
  font-weight: 800;
`;

export const Cost = styled(FlexBox)`
  padding: 18px 0px 18px 0px;
  border-bottom: 1px solid;
  border-color: #d3d3d3;
`;

export const Label = styled(SemiBoldText)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.27px;
  height: 40.39px;
  box-sizing: border-box;
  border: 1px solid #fb1e53;
  border-radius: 28px;
  font-size: 20px;
  color: #fb1e53;
`;

export const Labels = styled.div`
  display: flex;
  white-space: nowrap;

  ${Label}:not(:last-of-type) {
    margin-right: 18px;
  }
`;

export const Member = styled(FlexBox)`
  margin: 30px 0px 24px 0px;
`;

export const TimeContent = styled(FlexBox)`
  margin: 24px 0px 30px 0px;
`;

export const LocationContent = styled(FlexBox)`
  margin-top: ${props => props.top};
`;

export const Address = styled.div`
  display: flex;
  padding-left: ${props => props.left};
  padding-top: ${props => props.top};
`;

export const HyperText = styled(NormalText)`
  color: #b3b3b3;
  border-bottom: 1px solid #b3b3b3;
  margin: 0px 0px 0px 8px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 786px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 46px 52px 50px 72px;
  margin: 0px 0px 32px 0px;

  ${FlexBox}:not:(first-of-type) {
    margin: 0px 0px 24px 0px;
  }
`;

export const Status = styled(Container)``;

export const TimeLocation = styled(Container)``;

export const DropdownTitle = styled(FlexBox)`
  justify-content: space-between;
`;

export const QuickMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 48px;
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 48px;
`;

export const QuickMenuTitle = styled.div`
  width: 322px;
  padding: 32px 28px 24px 28px;
  background-color: #f6f6f6;
`;

export const QuickMenuContent = styled.div`
  width: 314px;
  padding: 16px 32px 44px 32px;
`;

export const QuickMenuAddress = styled(FlexBox)``;

export const Matching = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export const Box1 = styled.div`
  margin: 54.97px 82px 0px 0px;
  ${ContentBox}:not(:last-of-type) {
    border-bottom: 1px solid #d9d9d9;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 507.44px;

  background: url(${background}) no-repeat center;
  background-size: 1920px;
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 12px;
`;

export const MenuButton = styled(Icon).attrs({
  src: `${arrow}`,
})`
  cursor: pointer;
`;

export const Watch = styled(Icon).attrs({
  src: `${watch}`,
})``;

export const Place = styled(Icon).attrs({
  src: `${place}`,
})``;

export const People = styled(Icon).attrs({
  src: `${people}`,
})``;

export const Basketball = styled(Icon).attrs({
  src: `${basketball}`,
})`
  width: 48px;
`;

export const Rugby = styled(Icon).attrs({
  src: `${rugby}`,
})`
  width: 48px;
`;

export const Soccer = styled(Icon).attrs({
  src: `${soccer}`,
})`
  width: 48px;
`;

export const Tennis = styled(Icon).attrs({
  src: `${tennis}`,
})`
  width: 48px;
`;

export const Baseball = styled(Icon).attrs({
  src: `${baseball}`,
})`
  width: 48px;
`;

export const Volleyball = styled(Icon).attrs({
  src: `${volleyball}`,
})`
  width: 48px;
`;

export const Badge = styled(Icon).attrs({
  src: `${badge}`,
})`
  width: 144px;
  height: 76px;
`;

export const Progress = styled.progress`
  appearance: none;
  width: 100%;
  height: 26px;

  ::-webkit-progress-bar {
    background: #ffffff;
    border: 1px solid #d3d3d3;
    border-radius: 15px;
  }
  ::-webkit-progress-value {
    background: #fb1e53;
    border: 1px solid #d3d3d3;
    border-radius: 15px;
  }
`;

// 호스트 Star Rating
export const StarRating = styled.div`
  position: relative;
  width: max-content;
  margin-left: 24px;
`;

export const StarRated = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 50%;
  overflow: hidden;
`;

export const StarEmpty = styled.div`
  width: 100%
  z-index: 0;
`;

export const iconStarRated = styled(Icon).attrs({
  src: `${svgStarRated}`,
})`
  width: 24px;
  margin-right: 4px;
`;

export const iconStarEmpty = styled(Icon).attrs({
  src: `${svgStarEmpty}`,
})`
  width: 24px;
  margin-right: 4px;
`;

const Button = styled(BoldText)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fb1e53;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const ContactButton = styled(Button)`
  width: 252px;
  padding: 16px 0px 16px 0px;
`;

export const MatchingButton = styled(Button)`
  width: 100%;
  margin: 44px 0px 0px 0px;
  padding: 20px 0px 20px 0px;
`;

export const ConditionBox = styled.div`
  margin-top: 21px;
`;

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TempMap = styled.div`
  margin: 24px 0px 30px 0px;
  width: 186px;
  height: 185px;
  //border: 1px solid #d9d9d9;
  float: right;
  background: url(${map}) center no-repeat;
`;
export const Preference = styled.div`
  padding: 8px 0px 30px 0px;

  ${Icon}:not(:last-of-type) {
    margin: 0px 40px 0px 0px;
  }
`;

export const Badges = styled.div`
  padding: 16px 0px 30px 0px;
  ${Badge}:not(:last-of-type) {
    margin: 0px 24px 0px 0px;
  }
`;
