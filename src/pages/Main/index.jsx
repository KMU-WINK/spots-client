import React from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Menu from '../../components/Menu';
import Impromptu from '../../components/Impromptu';
import MatchList from '../../components/MatchList';

const MainPage = () => {
  return (
    <styled.MainContainer>
      <Header />
      <Banner />
      <Menu />
      <Impromptu />
      <MatchList />
      <Footer />
    </styled.MainContainer>
  );
};

export default MainPage;
