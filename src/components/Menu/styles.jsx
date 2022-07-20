import styled from 'styled-components';
import search from '../../imgs/search.svg';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
`;

export const SearchMenu = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.3vw;
  padding: 0.5vw 3vw;
  color: #fb1e53;
  opacity: 1;
  cursor: pointer;
  border-right: 1px solid #fb1e53;
`;

export const MakeMenu = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.3vw;
  padding: 0.5vw 3vw;
  color: #333333;
  opacity: 0.3;
  cursor: pointer;
`;

export const SearchImg = styled.img.attrs({
  src: search,
})`
  position: relative;
  z-index: 2;
  left: 2.2vw;
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`;

export const Search = styled.input`
  position: relative;
  z-index: 1;
  width: 38vw;
  height: 1.8vw;
  text-align: center;
  border: 1px solid #fb1e53;
  border-radius: 15px;
`;
