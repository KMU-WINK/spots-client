import styled from 'styled-components';
import logo from '../../imgs/logoblack.svg';
import kakao from '../../imgs/kakaotalk.svg';
import google from '../../imgs/google.svg';
import close from '../../imgs/close.svg';

export const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-itmes: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #3333337f;
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: 7px;
  width: 440px;
  cursor: pointer;
`;

export const TopBar = styled.div`
  width: 100%;
`;

export const CloseBtn = styled.img.attrs({
  src: close,
})`
  padding: 24.8px 23.5px 41.7px 0px;
  cursor: pointer;
  float: right;
`;

export const ModalBox = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 100;
  width: 518px;
  height: 440px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${LoginBox}:not(:last-of-type) {
    margin-bottom: 23px;
  }
  top: 20%;
`;

export const Slogan = styled.div`
  margin: 5px 0px 0px 0px;
  color: #1e1e1e;
  font-weight: 500;
  font-size: 15px;
`;

export const LoginText = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

export const Explain = styled.div`
  margin: 64px 0px 31px 0px;
  font-weight: 500;
  font-size: 14px;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 188px;
  height: 58px;
`;

const Icon = styled.img`
  padding: 12px 0px 12px 35px;
  display: absolute;
  width: 24px;
`;

export const Box = styled.div`
  padding: 12px 35px 12px 0px;
  width: 24px;
  height: 24px;
`;

export const Kakao = styled(Icon).attrs({ src: kakao })``;
export const Google = styled(Icon).attrs({ src: google })``;
