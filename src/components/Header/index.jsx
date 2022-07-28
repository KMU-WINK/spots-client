import React from 'react';
import * as styled from './styles';

const Header = () => {
  return (
    <styled.Container>
      <styled.Logo />
      <styled.RegistBox>
        <styled.Login>로그인</styled.Login>/
        <styled.SignUp>회원가입</styled.SignUp>
        <styled.Loginimg />
      </styled.RegistBox>
    </styled.Container>
  );
};

export default Header;
