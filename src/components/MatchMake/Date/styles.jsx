import styled from 'styled-components';
import calendarCheck from '../../../imgs/MatchMake/calendarCheck.svg';
import prevArrowInvalid from '../../../imgs/MatchMake/prevArrowInvalid.svg';
import nextArrowValid from '../../../imgs/MatchMake/nextArrowValid.svg';
import watch from '../../../imgs/MatchMake/watch.svg';

export const DateBox = styled.div`
    width: 60%;
    height: 19.5vw;
    display : flex;
    flex-direction : column;
    // align-items: center;
    // justify-content : space-evenly;
    background-color : white;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 1.4vw;
`;

export const DateText = styled.p`
    font-size : 1.3vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.6vw;
    margin-left : 5%;
`

export const DateInform = styled.p`
    font-size : 0.8vw;
    font-weight: 500;
    font-style: normal;
    line-height: 0.9vw;
    margin-left : 5%;
`

export const DateTime = styled.div`
    display : flex;
    align-items: center;
    margin-left : 5%;
`;

export const CalendarCheck = styled.img.attrs({
    src: calendarCheck,
  })`
    width: 1.25vw;
    height: 1.25vw;
`;

export const DateTimeText = styled.p`
    font-size : 1.25vw;
    font-weight: 700;
    font-style: normal;
`;

export const CalendarBox = styled.div`
    display : flex;
    height : 9.5vw;
    width : 90%;
    margin-left : 5%;
    justify-content : space-between;
`;

export const PrevArrowInvalid = styled.img.attrs({
    src: prevArrowInvalid,
  })`
    width: 0.6vw;
    height: 0.6vw;
`;

export const NextArrowValid = styled.img.attrs({
    src: nextArrowValid,
  })`
    width: 0.6vw;
    height: 0.6vw;
`;


export const Horizon = styled.hr`
  width : 90%;
  margin-left : 5%;
`;

export const TimeBox = styled.div`
  display : flex;
  align-items : center;
  margin-left : 5%;
`

export const Watch = styled.img.attrs({
    src: watch,
  })`
    width: 1.25vw;
    height: 1.25vw;
`;

export const TimeText = styled.p`
    font-size : 1.25vw;
    font-weight: 700;
    font-style: normal;
`;

export const TimeGetBox = styled.div`
  display : flex;
  height : 15%;
  margin-left : 5%;
  align-items : center;
`

export const TimeGet = styled.div`
  display : flex;
  width : 10%;
  height : 100%;
  margin-left : 1.25vw;
  border: 1px solid #FB1E53;
  border-radius : 12px;
`

export const TimeInform = styled.p`
    font-size : 0.8vw;
    font-weight: 500;
    font-style: normal;
    line-height: 0.9vw;
    margin-left : 1vw;
`


// export const TimeGet2359 = styled.input.attrs({
    
// })`
//     color : red;
//     border : none;
//     height : 70%;
//     width : 40%;

// `