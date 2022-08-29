import React, { useEffect } from 'react';
import * as styled from './styles';

const Withdrawl = ({ onSetShowWithdrawl }) => {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <styled.ModalBg>
      <styled.ModalBox>
        <styled.TopBar>
          <styled.CloseBtn onClick={() => onSetShowWithdrawl(false)} />
        </styled.TopBar>
        <styled.Title>탈퇴</styled.Title>
        <styled.Explain>
          탈퇴하시면 기존 계정에 있는 모든 정보가 삭제됩니다.
          <br />
          정말 탈퇴하시겠습니까?
        </styled.Explain>

        <styled.Buttons>
          <styled.Button
            background="#fb1e53"
            onClick={() => onSetShowWithdrawl(false)}
          >
            아니오
          </styled.Button>
          <styled.Button
            background="#d3d3d3"
            onClick={() => onSetShowWithdrawl(false)}
          >
            예
          </styled.Button>
        </styled.Buttons>
      </styled.ModalBox>
    </styled.ModalBg>
  );
};

export default Withdrawl;
