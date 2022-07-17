import React from 'react';
import styled from 'styled-components';
import logoblack from '../../imgs/logoblack.svg';
import login from '../../imgs/login.svg';

const Box = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: logoblack,
})`
  width: 124px;
  height: 60px;
  padding: 10px 10px;
`;

const RegistBox = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled.div`
  cursor: pointer;
  font-size: 16px;
  padding: 5px 5px;
`;

const SignUp = styled.div`
  cursor: pointer;
  font-size: 16px;
  padding: 5px 5px;
`;

const Loginimg = styled.img.attrs({
  src: login,
})`
  width: 24px;
  height: 24px;
  padding: 10px 10px;
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
