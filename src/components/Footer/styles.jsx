import React from 'react';
import styled from 'styled-components';
import logowhite from '../../imgs/logowhite.svg';

export const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 354px;
  width: 100%;
  max-width: 1920px;
`;

export const Logo = styled.img.attrs({
  src: logowhite,
})`
  width: 123px;
`;

export const Info = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 61px;
  padding-bottom: 93px;
  line-height: 260%;
  font-size: 14px;
`;

export const Connact = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 55px;
  padding-bottom: 56px;
  padding-left: 130px;
  line-height: 260%;
  font-size: 16px;
  font-weight: 700;
  border-left: 0.5px solid #d9d9d9;
  text-decoration: underline;
  cursor: pointer;
`;
