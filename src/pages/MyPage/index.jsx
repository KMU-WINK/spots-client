import React, { useState, useEffect } from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Withdrawl from '../../components/Withdrawl';

const MyPage = () => {
  const [currMenu, setCurrMenu] = useState('1');
  const [prevMenu, setPrevMenu] = useState(null);
  const [showWithdrawl, setShowWithdrawl] = useState(false);

  const handleClickMenu = e => {
    console.log(prevMenu);
    if (e.target.id === '5') {
      onSetShowWithdrawl(true);
      setPrevMenu(currMenu);
    } else setPrevMenu(null);
    setCurrMenu(e.target.id);
  };

  const onSetShowWithdrawl = active => {
    setShowWithdrawl(active);
  };

  useEffect(() => {
    if (!showWithdrawl && prevMenu) {
      setCurrMenu(prevMenu);
      setPrevMenu(null);
    }
  }, [showWithdrawl]);

  return (
    <styled.MyPage>
      <Header />
      <styled.MyPageContainer>
        <styled.ProfileBox>
          <styled.Profile>
            <styled.Upload />
          </styled.Profile>
          <styled.UserInfo>
            <styled.UserName>닉네임</styled.UserName>
            <styled.UserMail>qwerty@naver.com</styled.UserMail>
          </styled.UserInfo>
        </styled.ProfileBox>
        <styled.MenuBox>
          <styled.MenuList>
            <styled.Menu
              id="1"
              onClick={handleClickMenu}
              active={currMenu === '1'}
            >
              지원한 매칭
            </styled.Menu>
            <styled.Menu
              id="2"
              onClick={handleClickMenu}
              active={currMenu === '2'}
            >
              프로필 수정
            </styled.Menu>
            <styled.Menu
              id="3"
              onClick={handleClickMenu}
              active={currMenu === '3'}
            >
              내가 쓴 게시물
            </styled.Menu>
            <styled.Menu
              id="4"
              onClick={handleClickMenu}
              active={currMenu === '4'}
            >
              로그아웃
            </styled.Menu>
            <styled.Menu
              id="5"
              onClick={handleClickMenu}
              active={currMenu === '5'}
            >
              회원 탈퇴
            </styled.Menu>
          </styled.MenuList>
          <styled.MenuContents>
            {currMenu === '1' || prevMenu === '1' ? (
              <div>지원한 매칭</div>
            ) : null}
            {currMenu === '2' || prevMenu === '2' ? (
              <div>프로필 수정</div>
            ) : null}
            {currMenu === '3' || prevMenu === '3' ? (
              <div>내가 쓴 게시물</div>
            ) : null}
            {currMenu === '4' || prevMenu === '4' ? <div>로그아웃</div> : null}
          </styled.MenuContents>
          {showWithdrawl && (
            <Withdrawl onSetShowWithdrawl={onSetShowWithdrawl} />
          )}
        </styled.MenuBox>
      </styled.MyPageContainer>
      <Footer />
    </styled.MyPage>
  );
};

export default MyPage;
