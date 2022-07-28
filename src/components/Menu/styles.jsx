import styled from 'styled-components';
import search from '../../imgs/search.svg';

export const Box = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchMenu = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  padding-right: 52px;
  color: #fb1e53;
  opacity: 1;
  cursor: pointer;
  border-right: 1px solid #fb1e53;
`;

export const MakeMenu = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  padding-left: 52px;
  margin-right: 61px;
  color: #333333;
  opacity: 0.3;
  cursor: pointer;
`;

export const SearchImg = styled.img.attrs({
  src: search,
})`
  position: relative;
  z-index: 2;
  left: 40px;
  width: 20px;
  height: 17px;
  cursor: pointer;
`;

export const Search = styled.input`
  position: relative;
  z-index: 1;
  width: 744px;
  height: 35px;
  text-align: center;
  border: 1px solid #fb1e53;
  border-radius: 15px;
`;
