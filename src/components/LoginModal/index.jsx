import React from 'react';
import * as styled from './styles';

const LoginModal = () => {
  return (
    <styled.ModalBox>
        <styled.TopBar>
        <styled.CloseBtn />
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
  );
};

export default LoginModal;
