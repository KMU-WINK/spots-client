import styled from 'styled-components';
import arrow from '../../imgs/arrow right forward.svg';
import watch from '../../imgs/watch_later.svg';
import people from '../../imgs/icon-user-two-mono.svg';
import place from '../../imgs/place.svg';
import background from '../../imgs/Rectangle-1887.svg';

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
  font-size: ${props => props.fontSize};
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

export const HostBoldText = styled(ExtraBoldText)`
  font-size: 20px;
  margin-top: 21px;
  display: flex;
  align-items: center;
`;

export const HostLightText = styled(MediumText)`
  font-size: 16px;
  margin-top: 8px;
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
  margin-top: 24px;
`;

export const Address = styled.div`
  display: flex;
  padding-left: ${props => props.left};
  padding-top: ${props => props.top};
`;

export const HyperText = styled(NormalText)`
  font-color: #b3b3b3;
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

export const Condition = styled(Container)`
  padding: 32px 52px 32px 72px;
`;

export const Host = styled(Container)`
  padding: 32px 52px 32px 72px;
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

export const QuickMenuAddress = styled(FlexBox)``;

export const Matching = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export const Box1 = styled.div`
  margin: 32px;
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
  margin: 30px 0px 0px 0px;
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
