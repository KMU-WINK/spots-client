import React from 'react';
import styled from 'styled-components';
import logoblack from '../../imgs/logoblack.svg';
import login from '../../imgs/login.svg';

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: logoblack,
})`
  width: 6.5vw;
  padding: 1vw 1vw;
`;

const RegistBox = styled.div`
  display: flex;
  padding: 1vw;
  font-size: 1vw;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  cursor: pointer;
  padding: 1vw;
`;

const SignUp = styled.div`
  cursor: pointer;
  padding: 1vw;
`;

const Loginimg = styled.img.attrs({
  src: login,
})`
  width: 1.5vw;
  padding: 1vw;
`;

const HeaderBox = () => (
  <Box>
    <Logo />
    <RegistBox>
      <Login>로그인</Login>/<SignUp>회원가입</SignUp>
      <Loginimg />
    </RegistBox>
  </Box>
);

export default HeaderBox;
