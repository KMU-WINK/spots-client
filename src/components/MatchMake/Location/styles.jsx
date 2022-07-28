import styled from 'styled-components';
import place from '../../../imgs/MatchMake/place.svg';

export const LocationContainer = styled.div`
    width: 60%;
    height: 19.5vw;
    display : flex;
    align-items: center;
    justify-content : center;
    background-color : white;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 2vw;
`;

export const LocationBox = styled.div`
    width : 90%;
    height : 80%;
    display : flex;
    flex-direction : column;
`

export const LocationText = styled.p`
    font-size : 1.3vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.6vw;
`

export const PlaceInform = styled.div`
    display : flex;

`

export const Place = styled.img.attrs({
    src: place,
  })`
    width: 1.25vw;
    height: 1.25vw;
`;

export const PlaceText = styled.p`
    font-size : 1vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.1vw;
`

export const address = styled.p`
    font-size : 0.8vw;
    font-weight: 500;
    font-style: normal;
    line-height: 0.9vw;
`