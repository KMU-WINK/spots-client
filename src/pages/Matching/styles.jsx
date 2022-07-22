import styled from 'styled-components';
import arrow from '../../imgs/arrow right forward.svg';
import watch from '../../imgs/watch_later.svg';
import people from '../../imgs/icon-user-two-mono.svg';
import place from '../../imgs/place.svg';
import background from '../../imgs/Rectangle 1887.svg';

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

  margin-top: 1vw;
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

  ${Label}:not(:last-of-type) {
    margin-right: 1vw;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  div:not(:last-of-type) {
    margin-right: 1vw;
  }
`;

export const Member = styled(FlexBox)`
  margin-top: 1.5vw;
  margin-bottom: 1.25vw;
`;

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

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 19.6vw;
  height: 30vw;
  overflow: hidden;

  background: #ffffff;

  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  position: -webkit-sticky;
  position: sticky;
`;

export const SideBarTitle = styled.div`
  width: 100%;
  background-color: #f6f6f6;

  div:not(:last-of-type) {
    margin-left: 0.4vw;
  }
`;

export const MatchingPageBox = styled.div`
  display: flex;
  justify-content: center;
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

export const Button = styled(Icon).attrs({
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

export const Progress = styled.progress.attrs({
  value: 2,
  max: 4,
})`
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
