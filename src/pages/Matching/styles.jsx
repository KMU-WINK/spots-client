import styled from 'styled-components';
import arrow from '../../imgs/arrow right forward.svg';
import watch from '../../imgs/watch_later.svg';
import people from '../../imgs/icon-user-two-mono.svg';
import place from '../../imgs/place.svg';
import background from '../../imgs/Rectangle 1887.svg';

import svgStarRated from '../../imgs/icon-star-rated.svg';
import svgStarEmpty from '../../imgs/icon-star-empty.svg';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  div:not(:last-of-type) {
    margin-right: 20px;
  }
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
`;

export const Text1 = styled(Text)`
  font-weight: 800;
  font-size: 32px;
`;

export const Text2 = styled(Text)`
  font-weight: 600;
  font-size: 24px;
`;

export const Text3 = styled(Text)`
  font-weight: 800;
  font-size: 24px;
`;

export const HostBoldText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
  margin-top: 21px;
  display: flex;
  align-items: center;
`;

export const HostLightText = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
`;

export const Text6 = styled(Text)`
  font-weight: 500;
  font-size: 24px;
`;

export const Text7 = styled(Text)`
  font-weight: 400;
  font-size: 20px;
`;

export const Cost = styled(FlexBox)`
  padding: 18px 0px 18px 0px;
  border-bottom: 1px solid;
  border-color: #d3d3d3;
`;

export const CostBoldText = styled(Text7)`
  font-weight: 700;
`;

export const CostLightText = styled(Text7)``;

export const Label = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.27px;
  height: 40.39px;
  box-sizing: border-box;
  border: 1px solid #fb1e53;
  border-radius: 28px;
  font-weight: 600;
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
  margin-top: 30px;
  margin-bottom: 24px;
`;

export const MemberText = styled(Text2)``;

export const TimeContent = styled(FlexBox)`
  margin-top: 24px;
  margin-bottom: 30px;
`;

export const LocationContent = styled(FlexBox)`
  margin-top: 24px;
`;

export const Container = styled.div`
  width: 786px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 32px 52px 32px 72px;
  margin-bottom: 32px;

  ${FlexBox}:not:(first-of-type) {
    margin-bottom: 24px;
  }
`;

export const DropdownTitle = styled(FlexBox)`
  justify-content: space-between;
`;

export const QuickMenu = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 32px;
  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
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

export const MatchingPageBox = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export const Box1 = styled.div`
  margin: 32px;
`;

export const Background = styled.img.attrs({
  src: `${background}`,
})`
  max-width: 1920px;
  width: 100%;
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

const Button = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 12px;
  background: #fb1e53;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const ContactButton = styled(Button)`
  width: 252px;
  margin-top: 30px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const MatchingButton = styled(Button)`
  width: 100%;
  margin-top: 44px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ConditionBox = styled.div`
  margin-top: 21px;
`;
