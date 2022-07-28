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
    margin-right: 1vw;
  }
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
`;

export const Text1 = styled(Text)`
  font-weight: 800;
  font-size: 1.6vw;
`;

export const Text2 = styled(Text)`
  font-weight: 600;
  font-size: 1.25vw;
`;

export const Text3 = styled(Text)`
  font-weight: 800;
  font-size: 1.25vw;
`;

export const HostBoldText = styled(Text)`
  font-weight: 800;
  font-size: 1vw;
  height: 1vw;

  margin-top: 1vw;

  display: flex;

  align-items: center;
`;

export const HostLightText = styled(Text)`
  font-weight: 500;
  font-size: 0.8vw;

  margin-top: 0.4vw;
`;

export const Text6 = styled(Text)`
  font-weight: 500;
  font-size: 1.25vw;
`;

export const Text7 = styled(Text)`
  font-weight: 400;
  font-size: 1vw;
`;

export const Cost = styled(FlexBox)`
  padding-top: 1vw;
  padding-bottom: 1vw;

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

  width: 5vw;
  height: 2.1vw;

  box-sizing: border-box;

  border: 1px solid #fb1e53;
  border-radius: 28px;

  font-weight: 600;
  font-size: 1vw;

  color: #fb1e53;

  margin-top: 1vw;
`;

export const Labels = styled.div`
  display: flex;
  white-space: nowrap;

  ${Label}:not(:last-of-type) {
    margin-right: 1vw;
  }
`;

export const Member = styled(FlexBox)`
  margin-top: 1.5vw;
  margin-bottom: 1.25vw;
`;

export const MemberText = styled(Text2)``;

export const TimeContent = styled(FlexBox)`
  margin-top: 1.5vw;
  margin-bottom: 1.25vw;
`;

export const LocationContent = styled(FlexBox)`
  margin-top: 1.25vw;
`;

export const Container = styled.div`
  width: 41vw;

  background: #ffffff;

  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  padding: 1.4vw 2.6vw 1.4vw 3vw;
  margin-bottom: 1.5vw;

  ${FlexBox}:not:(first-of-type) {
    margin-bottom: 20px;
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
  margin-top: 1.5vw;

  align-self: flex-start;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const QuickMenuTitle = styled.div`
  width: 19.8vw;
  padding: 1.55vw 1.55vw 1vw 1.55vw;

  background-color: #f6f6f6;
`;

export const QuickMenuContent = styled.div`
  width: 19.6vw;
  padding: 0.8vw 1.65vw 2.35vw 1.65vw;

  border-radius: 0px;
`;

export const MatchingPageBox = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export const Box1 = styled.div`
  margin: 1.5vw;
`;

export const Background = styled.img.attrs({
  src: `${background}`,
})`
  width: 100vw;
`;

const Icon = styled.img`
  width: 1.3vw;
  margin-right: 0.4vw;
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
  height: 1.35vw;

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
  margin-left: 1.2vw;
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
})``;

export const iconStarEmpty = styled(Icon).attrs({
  src: `${svgStarEmpty}`,
})``;

const Button = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  border-radius: 0.625vw;
  background: #fb1e53;
  color: white;
  font-size: 1.25vw;

  cursor: pointer;
`;

export const ContactButton = styled(Button)`
  margin-top: 1.5vw;
  padding-top: 0.8vw;
  padding-bottom: 0.8vw;
  width: 13.22vw;
`;

export const MatchingButton = styled(Button)`
  width: 100%;

  margin-top: 2.23vw;

  padding-top: 1vw;
  padding-bottom: 1vw;
`;
