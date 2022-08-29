import React from 'react';
import styled from 'styled-components';
import logoblack from '../../imgs/logoblack.svg';
import login from '../../imgs/login.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logoblack,
})`
  width: 124px;
  height: 60px;
  cursor: pointer;
`;

export const RegistBox = styled.div`
  cursor: pointer;

  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const Login = styled.div`
  padding-right: 10px;
`;

export const SignUp = styled.div`
  cursor: pointer;
  padding-left: 10px;
`;

export const Loginimg = styled.img.attrs({
  src: login,
})`
  margin-left: 14px;
  width: 24px;
`;
