import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>메인 내용</main>
      <Footer />
    </>
  );
};

export default MainPage;
