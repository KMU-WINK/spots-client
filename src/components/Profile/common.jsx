import styled from 'styled-components';
import calendarCheck from '../../imgs/MatchMake/calendarCheck.svg';
import place from '../../imgs/MatchMake/place.svg';
import map from '../../imgs/MatchMake/map.svg';


export const ProfileContainer = styled.div`
  width : 990px;
  display : flex;
  flex-direction : column;

  // TODO delelte
  background-color : lightgray;
`;

export const TimeTable = styled.div`
    display : flex;
    align-items : center;
`

export const Container = styled.div`
    width: 100%;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 32px;
`;

export const TempContainer = styled.div`
    width: 100%;
    height : 431px;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 32px;
`;

export const CalendarCheck = styled.img.attrs({
  src: calendarCheck,
})`
  width: 30px;
  height: 30px;
`;

export const Section = styled.div`
    width : 100%;
    margin-top : 100px;
    justify-content :  space-between;
    display : flex;
`

export const SectionInform = styled.div`
    display : flex;
    flex-direction : column;
`

export const Text = styled.p`
    font-size : 32px;
    line-height : 38px;
    font-weight: 800;
    font-style: normal;
    margin-top : ${(props) => props.marginTop || "0px"};
    margin-left : ${(props) => props.marginLeft || "0px"};
`

export const GetInform = styled.input.attrs(props => ({
    placeholder : props.placeholder,
}))`
    width : ${(props) => props.width || "100% - 60px"};
    margin-top : ${(props) => props.marginTop || "0px"};
    margin-bottom : ${(props) => props.marginBot || "0px"};
    font-size : 16px;
    font-weight: 500;
    font-style: normal;
    border-radius : 12px;
    padding : 16px 30px 15px 30px;
    border: 1px solid #FB1E53;
    ::-webkit-input-placeholder {
        color: #D3D3D3;
      }
    &:focus {
    outline : none;
    }
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

export const Map = styled.img.attrs({
    src: map,
  })`
    width: 480px;
    height: 266px;
`;

export const SportsContainer = styled.div`
    width: 100%;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    box-sizing : border-box;
    border-radius: 12px;
    margin-top : 32px;
    padding : 53px 0 72px 71px;
`;

export const EachSports = styled.button`
    display : inline-flex;
    flex-direction : column;
    align-items : center;
    margin-right : 70px;
    border : none;
    background : none;
`