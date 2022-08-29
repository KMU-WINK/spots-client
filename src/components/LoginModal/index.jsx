import React, { useEffect } from 'react';
import * as styled from './styles';

const LoginModal = ({ onSetShowLogin }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <styled.ModalBg>
      <styled.ModalBox>
        <styled.TopBar>
          <styled.CloseBtn onClick={() => onSetShowLogin(false)} />
        </styled.TopBar>
        <styled.Logo />
        <styled.Slogan>
          Match together, Meet together, Play together.
        </styled.Slogan>
        <styled.Explain>SNS 계정으로 로그인</styled.Explain>
        <styled.LoginBox background="#FEE500">
          <styled.Kakao />
          <styled.LoginText>카카오 로그인</styled.LoginText>
          <styled.Box />
        </styled.LoginBox>
        <styled.LoginBox border="1px solid #858585">
          <styled.Google />
          <styled.LoginText>구글 로그인</styled.LoginText>
          <styled.Box />
        </styled.LoginBox>
      </styled.ModalBox>
    </styled.ModalBg>
  );
};

export default LoginModal;
