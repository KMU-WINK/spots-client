import React, { useState } from 'react';
import * as styled from './styles';
import LoginModal from '../LoginModal';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const onSetShowLogin = active => {
    console.log('클릭');
    setShowLogin(active);
  };

  return (
    <styled.Container>
      <styled.Logo />
      <styled.RegistBox>
        <styled.Login onClick={() => onSetShowLogin(true)}>로그인</styled.Login>
        /<styled.SignUp>회원가입</styled.SignUp>
        <styled.Loginimg />
      </styled.RegistBox>
      {showLogin && <LoginModal onSetShowLogin={onSetShowLogin} />}
    </styled.Container>
  );
};

export default Header;
