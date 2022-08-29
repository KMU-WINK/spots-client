import styled from 'styled-components';
import close from '../../imgs/close.svg';

export const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #3333337f;
`;

export const ModalBox = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 100;
  width: 468px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 42px 0px;
`;

export const TopBar = styled.div`
  width: 100%;
`;

export const CloseBtn = styled.img.attrs({
  src: close,
})`
  padding: 17px 16.5px 12.5px 0px;
  cursor: pointer;
  float: right;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

export const Explain = styled.div`
  font-style: normal;
  font-weight: 400;
  padding: 24px 0px 24px 0px;
  text-align: center;
`;

export const Button = styled.div`
  width: 167px;
  padding: 16px 0px 16px 0px;
  text-align: center;
  border-radius: 12px;
  background: ${props => props.background};
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  ${Button}:not(:last-of-type) {
    margin-right: 12px;
  }
`;
