import styled from 'styled-components';
import calendarCheck from '../../imgs/MatchMake/calendarCheck.svg';
import watch from '../../imgs/MatchMake/watch.svg';
import place from '../../imgs/MatchMake/place.svg';
import map from '../../imgs/MatchMake/map.svg';
import clear from '../../imgs/MatchMake/clear_x.svg';

export const ProfileContainer = styled.div`
  width : 990px;
  display : flex;
  flex-direction : column;

  // TODO delelte
`;

export const Horizon = styled.hr`
    height : 1px;
    border  : none;
    background : #D3D3D3;
    margin : ${(props) => props.marginTop || "0px"} 0 0 0;
`

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
    margin-top : ${(props) => props.marginTop || "100px"};;
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
    width : ${(props) => props.width || "100%"};
    margin-top : ${(props) => props.marginTop || "0px"};
    margin-bottom : ${(props) => props.marginBot || "0px"};
    height : ${(props) => props.height || "100%"};
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
    box-sizing : border-box;
`

export const PlaceInform = styled.div`
    display : flex;
    align-items : center;
    margin-top : ${(props) => props.marginTop || "30px"};
    height : 29px;
`

export const Place = styled.img.attrs({
    src: place,
  })`
    width: 30px;
    height: 30px;
`;

export const InformText = styled.p`
    font-size : 24px;
    font-weight: 500;
    font-style: normal;
    margin-left : ${(props) => props.marginLeft || "0px"};
`

export const PlaceAddress = styled.p`
    font-size : 20px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    margin : 13px 0 0 30px;
`

export const publicContainer = styled.div`
  display : flex;
  margin-top : ${(props) => props.marginTop || "024x"};
  align-items : center;
`

export const publicBox = styled.div`
  display : flex;
  border: 1px solid #858585;
  border-radius: 28px;
  margin-left : 20px;
  align-items : center;
  justify-content : center;
  font-size : 20px;
  line-height: 24px;
  font-weight: 600;
  font-style: normal;
  background : #858585;
  color : white;
  width : 100px;
  height : 40px;
`

export const Map = styled.img.attrs({
    src: map,
  })`
    width: ${(props) => props.width || "480px"};
    height: ${(props) => props.height || "266px"};
`;

export const SportsContainer = styled.div`
    width: 100%;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    box-sizing : border-box;
    border-radius: 12px;
    margin-top : 32px;
    padding : ${(props) => props.padding || "0px"};
    justify-content : space-between;
`;

export const EachSports = styled.button`
    display : inline-flex;
    flex-direction : column;
    align-items : center;
    margin-right : 70px;
    border : none;
    background : none;
`

export const ButtonContainer = styled.div`
  margin-top : 150px;
  text-align : center;
`

export const EditButton = styled.button`
  border-radius : 12px;
  width : 167px;
  height : 57px;
  border : none;
  background-color : #FB1E53;
  font-size : 20px;
  font-weight : 700;
  color : white;
`


// EditProfile
export const EnterTimeContainer = styled.div`
    width: 100%;
    display : flex;
    flex-direction : column;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    box-sizing : border-box;
    border-radius: 12px;
    margin-top : 20px;
    padding : 16px 40px 52px 40px;
`;

export const weekContainer = styled.div`
  width: 100%;
  display : flex;
  justify-content : space-between;
`

export const weekBtn = styled.button`
  width : 76px;
  height : 63px;
  background: ${(props) => props.backColor || "transparent"};
  color: ${(props) => props.color || "black"};
  border-radius: 12px;
  font-size : 24px;
  line-height: 29px;
  font-weight: 500;
  font-style: normal;
  border : none;
`

export const AddTimeBox = styled.div`
  display : flex;
  justify-content : space-between;
  margin-top : 40px;
`

export const TimeGetContainer = styled.div`
  display : flex;
  flex-direction : column;
  
`

export const TimeGetBox = styled.div`
  display : flex;
  align-items : center;
`

export const Watch = styled.img.attrs({
  src: watch,
})`
  width: 30px;
  height: 30px;
`;

export const TimeGet = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-evenly;
  width : 108px;
  height : 48px;
  border: 1px solid #FB1E53;
  border-radius : 12px;
  background : white;
  box-sizing : border-box;
  margin-left : ${(props) => props.marginLeft || "0px"};
`
export const Inform = styled.span`
  font-size : 20px;
  line-height: 24px;
  font-weight: 500;
  font-style: normal;
  margin-left : ${(props) => props.marginLeft || "0px"};
  margin-top : ${(props) => props.marginTop || "0px"};

`

export const TimeGetTime = styled.input.attrs(props => ({
  placeholder : props.placeholder,
}))`
  width : 30px;
  font-size : 24px;
  font-weight: 500;
  font-style: normal;
  border : none;
  margin-${(props) => props.direction || "left"} : 10px;
  border-radius : 12px;
  ::-webkit-input-placeholder {
      color: #D3D3D3;
    };
  &:focus {
    outline : none;
  }
`

export const Colon = styled.p`
  color : #FB1E53;
  font-size : 24px;
  padding-bottom : 5px;
  font-weight : 500;
  vertical-align : center;
`

export const AddBtn = styled.button`
  border-radius : 12px;
  width : 168px;
  height : 56px;
  border : none;
  background-color : #FB1E53;
  font-size : 24px;
  font-weight : 700;
  color : white;
`

export const LocationGetBox = styled.div`
    display : flex;
    margin-top : 24px;
`

export const ClearBtn = styled.button`
  position : relative;
  width: 24px;
  height: 24px;
  top : 13px;
  right : 135px;
  border : none;
  background : transparent;
`

export const Clear = styled.img.attrs({
    src: clear,
  })`
    width: 24px;
    height: 24px;
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

export const EditSportsContainer = styled.div`
    width: 100%;
    display : flex;
    flex-direction : column;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    box-sizing : border-box;
    border-radius: 12px;
    margin-top : 24px;
    padding : ${(props) => props.padding || "0px"};
`;

export const EditSportsBox = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
`

export const EtcSports = styled.div`
  display : flex;
  margin-top : 40px;
  align-items : center;
`

export const MatchingRegister = styled.div`
    display : flex;
    width : 100vw;
    height : 173px;
    justify-content : center;
    align-items : center;
    margin-top : 32px;
    box-shadow : 0px -4px 24px -18px rgba(0, 0, 0, 0.25);
    background-color : white;
    position : sticky;
    z-index: 1;
    bottom : 0;
`

export const ResisterBtn = styled.button`
    width : 1194px;
    height : 74px;
    border-radius : 12px;
    border: none;
    background-color : ${(props) => props.color || "#D3D3D3"};
    font-size : 24px;
    font-weight : 700;
    color : white;
`