import styled from 'styled-components';
import place from '../../../imgs/MatchMake/place.svg';
import map from '../../../imgs/MatchMake/map.svg';
import clear from '../../../imgs/MatchMake/clear_x.svg';

export const LocationTopBox = styled.div`
    display : flex;
    justify-content :  space-between;
    margin-bottom : 23px;
`

export const TopLeft = styled.div`
    display : flex;
    flex-direction : column;
`

export const PlaceInform = styled.div`
    display : flex;
    align-items : center;
    margin-top : 30px;
    height : 29px;
`

export const Place = styled.img.attrs({
    src: place,
  })`
    width: 30px;
    height: 30px;
`;

export const PlaceText = styled.p`
    font-size : 24px;
    font-weight: 500;
    font-style: normal;
    margin-left : 8px;
`

export const PlaceAddress = styled.p`
    font-size : 20px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    margin : 13px 0 0 30px;
`

export const LocationGetBox = styled.div`
    display : flex;
    margin-top : 32px;
`

export const Clear = styled.img.attrs({
    src: clear,
  })`
    width: 24px;
    height: 24px;
    position : relative;
    top : 13px;
    right : 135px;
`;

export const SearchBtn = styled.button`
      margin-left : 16px;
      border-radius : 12px;
      width : 81px;
      height : 50px;
      border : none;
      background-color : #FB1E53;
      font-size : 20px;
      font-weight : 700;
      color : white;
`

export const Map = styled.img.attrs({
    src: map,
  })`
    width: 408px;
    height: 216px;
`;

export const ExpectedCost = styled.div`
  display : flex;
  margin-top : 17px;
`

export const NoCost = styled.p`
  font-size : 20px;
  line-height : 24px;
  margin : 12px 0 0 17px;
  font-weight : 500;
  color : #858585;
`
