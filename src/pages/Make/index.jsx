import React from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import MatchMake from '../../components/MatchMake';
import MatchingRegister from '../../components/MatchingRegister'

const MakePage = () => {
  return (
    <styled.MainContainer>
      <Header />
      <Banner />
      <MatchMake />
      <MatchingRegister />
      <Footer />
    </ styled.MainContainer>
  );
};

export default MakePage;