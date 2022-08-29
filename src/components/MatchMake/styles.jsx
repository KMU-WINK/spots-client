import styled from 'styled-components';
import check from '../../imgs/MatchMake/check.svg';
import watch from '../../imgs/MatchMake/watch.svg';
import calendarCheck from '../../imgs/MatchMake/calendarCheck.svg';
import place from '../../imgs/MatchMake/place.svg';
import map from '../../imgs/MatchMake/map.svg';
import clear from '../../imgs/MatchMake/clear_x.svg';
import arrow from '../../imgs/MatchMake/arrow.svg';
import background from '../../imgs/Rectangle-1887.svg';

export const MatchMakeContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

export const SportsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const sportsText = styled.span`
  margin-top: 6px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 800;
  font-style: normal;
  color: ${props => props.fontColor || '#858585'};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 32px;
`;

export const Box = styled.div`
  width: 90%;
  margin: 40px 72px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
  font-style: normal;
  margin-top: ${props => props.marginTop || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
`;

export const Horizon = styled.hr`
  height: 1px;
  border: none;
  background: #d3d3d3;
  margin: ${props => props.marginTop || '0px'} 0 0 0;
`;

export const GetInform = styled.input.attrs(props => ({
  placeholder: props.placeholder,
}))`
  width: ${props => props.width || '100%'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBot || '0px'};
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  border-radius: 12px;
  padding: 16px 30px 15px 30px;
  border: 1px solid #fb1e53;
  ::-webkit-input-placeholder {
    color: #d3d3d3;
  }
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

export const ReferText = styled.div`
  margin-top: ${props => props.marginTop || '8px'};
  margin-left: ${props => props.marginLeft || '8px'};
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  font-style: normal;
  word-break: keep-all;
`;

export const CheckBox = styled.button`
  margin: ${props => props.margin || '0 0 0 0'};
  border-radius: 5px;
  width: 24px;
  height: 24px;
  border: 1px solid #fb1e53;
  background-color: ${props => props.backColor || 'none'};
  // backgroud-color : "blue";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OnCheck = styled.img.attrs({
  src: check,
})`
  margin-top: 1px;
  width: 14.5px;
  height: 10px;
`;

// date
export const DateBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const CalendarCheck = styled.img.attrs({
  src: calendarCheck,
})`
  width: 30px;
  height: 30px;
  margin-left: ${props => props.marginLeft || '0px'};
`;

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  height: 29px;
  margin-top: 30px;
`;

export const Watch = styled.img.attrs({
  src: watch,
})`
  width: 30px;
  height: 30px;
`;

export const TimeText = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  margin-left: 8px;
`;

export const TimeGetBox = styled.div`
  display: flex;
  height: 49px;
  margin: 12px 0 0 30px;
  align-items: center;
`;

export const TimeGet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10%;
  height: 100%;
  border: 1px solid #fb1e53;
  border-radius: 12px;
`;

export const TimeGetTime = styled.input.attrs(props => ({
  placeholder: props.placeholder,
}))`
  width: 30px;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  border: none;
  margin-${props => props.direction || 'left'}: 10px;
  border-radius: 12px;
  ::-webkit-input-placeholder {
    color: #d3d3d3;
  }
  &:focus {
    outline: none;
  }
`;

export const Colon = styled.p`
  color: #fb1e53;
  font-size: 24px;
  padding-bottom: 5px;
  font-weight: 500;
  vertical-align: center;
`;

// Location
export const LocationTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaceInform = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  height: 29px;
`;

export const Place = styled.img.attrs({
  src: place,
})`
  width: 30px;
  height: 30px;
`;

export const PlaceText = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  margin-left: 8px;
`;

export const PlaceAddress = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-style: normal;
  margin: 13px 0 0 30px;
`;

export const LocationGetBox = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const ClearBtn = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  top: 13px;
  right: 135px;
  border: none;
  background: transparent;
`;

export const Clear = styled.img.attrs({
  src: clear,
})`
  width: 24px;
  height: 24px;
`;

export const SearchBtn = styled.button`
  margin-left: 16px;
  border-radius: 12px;
  width: 81px;
  height: 50px;
  border: none;
  background-color: #fb1e53;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const Map = styled.img.attrs({
  src: map,
})`
  width: 408px;
  height: 216px;
`;

export const ExpectedCost = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const NoCost = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin: 12px 0 0 17px;
  font-weight: 500;
  color: #858585;
`;

// Condition

export const OptionBox = styled.div`
  margin: 20px 0 ${props => props.marginBot || 24}px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Option = styled.div`
  display: flex;
`;

export const OptionText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;

export const OptionInfo = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  color: #d3d3d3;
  margin: 5px 0 0 28px;
`;

export const GetMember = styled.div`
  height: 50px;
  width: 170px;
  border-radius: 12px;
  border: 1px solid #858585;
  margin-top: 12px;
  display: flex;
  // justify-content : space-around;
  justify-content: space-between;
  padding: 0 18px;
  align-items: center;
`;

export const OptionBtn = styled.button`
  height: 50px;
  width: 305px;
  border-radius: 12px;
  border: 1px solid #fb1e53;
  margin-top: 12px;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 28px;
  box-sizing: border-box;
  background: transparent;
`;
export const OptionDropDown = styled.div`
  height: 160px;
  width: 305px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 10px 11px 0 11px;
  overflow-y: scroll;
  background: white;

  &::-webkit-scrollbar {
    width: 10px;
  }

  // &::-webkit-scrollbar-track {
  //     height : 50px;
  // }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #d3d3d3;
  }

  position: absolute;
  top: 86px;
  z-index: 10;
`;

export const SelectOption = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  margin-bottom: 10px;
  background: transparent;
  display: flex;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  &:hover {
    background: #d3d3d3;
  }
`;

export const Arrow = styled.img.attrs({
  src: arrow,
})`
  width: 20px;
  height: 12px;
`;

export const RotatedArrow = styled.img.attrs({
  src: arrow,
})`
  width: 20px;
  height: 12px;
  transform: rotate(180deg);
`;

export const Btn = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const NumMember = styled.p`
  font-size: 24px;
  font-weight: 800;
  line-height: 29px;
  color: #fb1e53;
  padding-bottom: 4px;
`;

// SportsType

export const sportsBox = styled.div`
  margin-top: 20px;
  margin-left: 9px;
  display: flex;
  gap: 70px;
`;

export const eachSports = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 70px;
  border: none;
  background: none;
`;

export const sports_img = styled.img.attrs(props => ({
  src: props.src,
  path: props.src.path,
}))`
  width: 40px;
  height: 40px;
`;

// Contact
export const OpenProfile = styled.div`
  margin-top: 30px;
  display: inline-flex;
`;

export const spanText = styled.span`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  font-style: normal;
`;

export const WarningText = styled.p`
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  font-style: normal;
  color: #fb1e53;
  visibility: hidden;
`;

// RegisterBtn
export const MatchingRegister = styled.div`
  display: flex;
  // width : 1920px;
  width: 100%;
  height: 173px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  box-shadow: 0px -4px 24px -18px rgba(0, 0, 0, 0.25);
  background-color: white;
  position: sticky;
  z-index: 1;
  bottom: 0;
`;

export const ResisterBtn = styled.button`
  width: 1194px;
  height: 74px;
  border-radius: 12px;
  border: none;
  background-color: ${props => props.color || '#D3D3D3'};
  font-size: 24px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export const SportSelect = styled.div`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  > span {
    font-weight: 500;
    font-size: 14px;
    margin-top: 7px;
    color: ${props => (props?.select ? '#FB1E53' : '#858585')};
  }
  > img {
    height: 40px;
    ${props =>
      props?.select &&
      `filter: invert(25%) sepia(60%) saturate(4913%) hue-rotate(333deg) brightness(97%) contrast(102%)`};
  }
`;
