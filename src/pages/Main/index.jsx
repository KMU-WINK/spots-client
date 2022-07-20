import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Menu from '../../components/Menu';

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <main>메인 내용</main>
      <Footer />
    </>
  );
};

export default MainPage;
