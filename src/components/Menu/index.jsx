import React, { useEffect, useState } from 'react';
import * as styled from './styles';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const [currentClick, setCurrentClick] = useState('search');
  const [prevClick, setPrevClick] = useState(null);
  const navigator = useNavigate();
  const onClick = e => {
    setCurrentClick(e.target.id);
  };

  useEffect(
    e => {
      if (currentClick && currentClick === 'make') {
        navigator('/matching/make');
        return;
      }

      if (currentClick !== null) {
        const current = document.getElementById(currentClick);
        current.style.color = '#fb1e53';
        current.style.opacity = '1';
        setMenu(!menu);
      }

      if (prevClick !== null) {
        const prev = document.getElementById(prevClick);
        prev.style.color = '#333333';
        prev.style.opacity = '0.3';
      }
      setPrevClick(currentClick);
    },
    [currentClick],
  );

  return (
    <styled.Box>
      {menu === true ? (
        <>
          <styled.SearchMenu onClick={onClick} id="search">
            모임 찾기
          </styled.SearchMenu>
          <styled.MakeMenu onClick={onClick} id="make">
            모임 만들기
          </styled.MakeMenu>
          <styled.SearchImg />
          <styled.Search></styled.Search>
        </>
      ) : (
        <>
          <styled.SearchMenu onClick={onClick} id="search">
            모임 찾기
          </styled.SearchMenu>
          <styled.MakeMenu onClick={onClick} id="make">
            모임 만들기
          </styled.MakeMenu>
        </>
      )}
    </styled.Box>
  );
};

export default Menu;
