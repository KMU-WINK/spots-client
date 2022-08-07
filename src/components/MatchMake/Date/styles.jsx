import styled from 'styled-components';
import calendarCheck from '../../../imgs/MatchMake/calendarCheck.svg';
import prevArrowInvalid from '../../../imgs/MatchMake/prevArrowInvalid.svg';
import nextArrowValid from '../../../imgs/MatchMake/nextArrowValid.svg';
import watch from '../../../imgs/MatchMake/watch.svg';

export const DateContainer = styled.div`
    width: 100%;
    // height: 507px;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 32px;
`

export const DateBox = styled.div`
  width : 90%;
  margin : 40px 72px;
  display : flex;
  flex-direction : column;
`;

export const DateText = styled.p`
  font-size : 32px;
  line-height : 38px;
  font-weight: 700;
  font-style: normal;
`

export const DateInform = styled.p`
    font-size : 20px;
    line-height : 24px;
    font-weight: 500;
    font-style: normal;
    margin-top : 8px;
`

export const DateTime = styled.div`
    margin-top : 24px;
    height : 29px;
    display : flex;
    align-items: center;
`;

export const CalendarCheck = styled.img.attrs({
    src: calendarCheck,
  })`
    width: 30px;
    height: 30px;
`;

export const DateTimeText = styled.p`
  margin-left : 8px;
    font-size : 24px;
    font-weight: 700;
    font-style: normal;
`;

export const CalendarBox = styled.div`
    margin : 12px 0px 30px;
    display : flex;
    height : 140px;
    justify-content : space-between;
`;

export const Horizon = styled.hr`
    height : 1px;
    border  : none;
    background : #D3D3D3;
`

export const PrevArrowInvalid = styled.img.attrs({
    src: prevArrowInvalid,
  })`
    width: 20px;
    height: 20px;
`;

export const NextArrowValid = styled.img.attrs({
    src: nextArrowValid,
  })`
    width: 20px;
    height: 20px;
`;


export const TimeBox = styled.div`
  display : flex;
  align-items : center;
  height : 29px;
  margin-top : 30px;
`

export const Watch = styled.img.attrs({
    src: watch,
  })`
    width: 30px;
    height: 30px;
`;

export const TimeText = styled.p`
    font-size : 24px;
    font-weight: 700;
    font-style: normal;
    margin-left : 8px;
`;

export const TimeGetBox = styled.div`
  display : flex;
  height : 49px;
  margin : 12px 0 0 30px;
  align-items : center;
`

export const TimeGet = styled.div`
  display : flex;
  width : 10%;
  height : 100%;
  border: 1px solid #FB1E53;
  border-radius : 12px;
`

export const TimeInform = styled.p`
    font-size : 20px;
    font-weight: 500;
    font-style: normal;
    margin-left : 14px;
`


// export const TimeGet2359 = styled.input.attrs({
    
// })`
//     color : red;
//     border : none;
//     height : 70%;
//     width : 40%;

// `