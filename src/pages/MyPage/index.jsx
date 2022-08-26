import React, { useState, useEffect } from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginModal from '../../components/LoginModal';

const MyPage = () => {
  const [currMenu, setCurrMenu] = useState(null);
  const [prevMenu, setPrevMenu] = useState(null);

  const handleClickMenu = e => {
    setCurrMenu(e.target.id);
  };

  useEffect(
    e => {
      if (currMenu !== null) {
        const curr = document.getElementById(currMenu);
        curr.style.fontWeight = '700';
        curr.style.fontSize = '30px';
        curr.style.color = '#FB1E53';
      }
      if (prevMenu !== null) {
        const prev = document.getElementById(prevMenu);
        prev.style.fontWeight = '500';
        prev.style.fontSize = '24px';
        prev.style.color = '#333333';
      }
      setPrevMenu(currMenu);
    },
    [currMenu],
  );

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
            <styled.Menu id="1" onClick={handleClickMenu}>
              지원한 매칭
            </styled.Menu>
            <styled.Menu id="2" onClick={handleClickMenu}>
              프로필 수정
            </styled.Menu>
            <styled.Menu id="3" onClick={handleClickMenu}>
              내가 쓴 게시물
            </styled.Menu>
            <styled.Menu id="4" onClick={handleClickMenu}>
              로그아웃
            </styled.Menu>
            <styled.Menu id="5" onClick={handleClickMenu}>
              회원 탈퇴
            </styled.Menu>
          </styled.MenuList>
          <styled.MenuContents>
            {currMenu === '1' ? <div>지원한 매칭</div> : null}
            {currMenu === '2' ? <div>프로필 수정</div> : null}
            {currMenu === '3' ? <div>내가 쓴 게시물</div> : null}
            {currMenu === '4' ? <div>로그아웃</div> : null}
            {currMenu === '5' ? <div>회원 탈퇴</div> : null}
          </styled.MenuContents>
        </styled.MenuBox>
      </styled.MyPageContainer>
      <Footer />
    </styled.MyPage>
  );
};

export default MyPage;
