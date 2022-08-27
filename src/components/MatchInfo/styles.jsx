import styled from 'styled-components';
import usericon from '../../imgs/icon-user-two-mono.svg';
import togglebutton from '../../imgs/toggleBtn.svg';
import levelfull from '../../imgs/level-full.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MatchDiv = styled.div`
  width: 990px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: inline-block;
`;

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 27px 22px 47px;
  > span {
    font-family: 'Apple SD Gothic Neo';

    &:nth-child(1) {
      font-weight: 700;
      font-size: 20px;
      margin-right: 165px;
    }
    &:nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      margin-right: 116px;
    }

    &:nth-child(3) {
      font-weight: 400;
      font-size: 18px;
      margin-right: 110px;
    }
    &:nth-child(5) {
      font-weight: 400;
      font-size: 16px;
      margin-right: 56px;
    }
    &:nth-child(6) {
      font-weight: 700;
      font-size: 14px;
      color: ${props => (props.color ? props.color : '#fb1e53')};
      margin-right: 40px;
    }
  }
`;

export const UserIcon = styled.img.attrs({
  src: usericon,
})`
  width: 24px;
  height: 27.54px;
`;

export const Toggle = styled.img.attrs({
  src: togglebutton,
})`
  width: 12.12px;
  height: 20px;
  cursor: pointer;
`;

export const MatchDivOpen = styled.div`
  width: 990px;
  height: 1072px;
  background: #ffffff;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: inline-block;
`;

export const InnerDiv1 = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 59px;
`;

export const InnerDiv1Left = styled.div`
  width: 100%;
  padding: 0 20px 0 46px;
  display: flex;
  position: relative;

  > div {
    &:nth-child(2) {
      width: 263px;
      height: 263px;
      border-radius: 70%;
      background-color: #d9d9d9;
      position: absolute;
      right: 98px;
      top: 14px;
    }
  }
`;

export const MatchingTitle = styled.div`
  border-top: 1px solid #d3d3d3;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0 27px 14px 47px;
  padding-top: 34px;
`;

export const MatchingCount = styled.div`
  display: flex;

  > span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;

    &:nth-child(1) {
      font-size: 128px;
      letter-spacing: -0.02em;
      color: #fb1e53;
    }
    &:nth-child(2) {
      font-size: 20px;
      letter-spacing: -0.02em;
      color: #fb1e53;
      padding-top: 100px;
      padding-left: 5px;
    }
  }
`;

export const InnerDivLevel = styled.div`
  width: 453px;
  position: relative;
  height: 45px;
  margin-bottom: 7px;

  > div {
    height: 45px;
    position: absolute;
    top: 0;

    &:nth-child(1) {
      border: 1px solid #d3d3d3;
      border-radius: 20px;
      width: 453px;
    }
    &:nth-child(2) {
      width: ${props => (props.width ? props.width : '#fb1e53')};
      background: #fb1e53;
      border-radius: 20px;
    }
  }
`;

export const InnerDivLevelFull = styled.img.attrs({
  src: levelfull,
})`
  width: 453px;
  height: 45px;
`;

export const ProgressBarWrap = styled.div`
  > span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #333333;
  }
`;

export const ApplicantWrap = styled.div`
  padding: 0 20px 0 46px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 35px;
  }
`;

export const ApplicantList = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;
`;

export const InnerToggle = styled.div`
  width: 740px;
  gap: 70px;
  display: flex;
  align-items: center;
  border: 1px solid #fb1e53;
  border-radius: 12px;
  padding: 0 26px;
  position: relative;

  > span {
    font-style: normal;
    font-style: normal;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
  }
  > img {
    position: absolute;
    right: 26px;
    cursor: pointer;
  }
`;

export const InnerToggleBtn = styled.img.attrs({
  src: togglebutton,
})`
  width: 12.12px;
  height: 20px;
`;

export const buttons = styled.div`
  display: flex;
  gap: 14px;

  > button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:nth-child(1) {
      width: 72px;
      height: 61px;
      background-color: #fb1e53;
      border-radius: 12px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.05em;
      color: #ffffff;
    }
    &:nth-child(2) {
      width: 72px;
      height: 61px;
      background-color: #333333;
      border-radius: 12px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.05em;
      color: #ffffff;
    }
  }
`;

export const moreApplicant = styled.button`
  all: unset;
  width: 100%;
  background: #fb1e53;
  border-radius: 12px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  padding: 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
