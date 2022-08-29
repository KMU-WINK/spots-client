import React, { useState } from 'react';
import * as styled from './styles';
import LoginModal from '../LoginModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigator = useNavigate();
  const onSetShowLogin = active => {
    setShowLogin(active);
  };

  return (
    <styled.Container>
      <styled.Logo
        onClick={() => {
          navigator('/');
        }}
      />
      <styled.RegistBox>
        <styled.Login onClick={() => onSetShowLogin(true)}>로그인</styled.Login>
        /
        <styled.SignUp onClick={() => onSetShowLogin(true)}>
          회원가입
        </styled.SignUp>
        <styled.Loginimg onClick={() => navigator('/mypage')} />
      </styled.RegistBox>
      {showLogin && <LoginModal onSetShowLogin={onSetShowLogin} />}
    </styled.Container>
  );
};

export default Header;
