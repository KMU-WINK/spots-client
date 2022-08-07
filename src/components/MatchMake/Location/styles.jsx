import styled from 'styled-components';
import place from '../../../imgs/MatchMake/place.svg';
import map from '../../../imgs/MatchMake/map.svg';

export const LocationContainer = styled.div`
    width: 100%;
    height: 443px;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 32px;
`;

export const LocationBox = styled.div`
    width : 90%;
    margin : 40px 72px;
    display : flex;
    flex-direction : column;
`

export const LocationTopBox = styled.div`
    display : flex;
    justify-content :  space-between;
    margin-bottom : 23px;
`

export const TopLeft = styled.div`
    display : flex;
    flex-direction : column;
`

export const LocationText = styled.p`
    font-size : 32px;
    line-height : 38px;
    font-weight: 700;
    font-style: normal;
    vertical-align: top;
    margin-top: ${(props) => props.marginTop || "0"}px
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

export const LocationGet = styled.input.attrs({
    placeholder : "주소를 검색해주세요. (ex. 지번(신대방동), 도로명(신대방길))",
})`
    width : 455px;
    font-size : 16px;
    font-weight: 500;
    font-style: normal;
    border-radius : 12px;
    padding : 16px 30px 15px 30px;
    border: 1px solid #FB1E53;
    ::-webkit-input-placeholder {
        color: #D3D3D3;
      }
`

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

export const Horizon = styled.hr`
    height : 1px;
    border  : none;
    background : #D3D3D3;
`