import styled from 'styled-components';
import arrow from '../../../imgs/MatchMake/arrow.svg';


export const OptionBox = styled.div`
    margin : 20px 0 ${(props) => props.marginBot || 24}px;
    display : flex;
    flex-direction : column;
`

export const Option = styled.div`
    display : flex;
`

export const OptionText = styled.p`
    font-size : 20px;
    line-height : 24px;
    font-weight : 700;
`

export const OptionInfo = styled.p`
    font-size : 16px;
    line-height : 19px;
    font-weight : 500;
    color : #D3D3D3;
    margin : 5px 0 0 28px;
`

export const GetMember = styled.div`
    height : 50px;
    width : 170px;
    border-radius : 12px;
    border: 1px solid #858585;
    margin-top : 12px;
    display : flex;
    // justify-content : space-around;
    justify-content : space-between;
    padding : 0 18px;
    align-items : center;
`

export const OptionDataDiv = styled.div`
    height : 50px;
    width : 305px;
    border-radius : 12px;
    border: 1px solid #FB1E53;
    margin-top : 12px;
    display : flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    justify-content : space-between;
    align-items : center;
    padding : 0 20px 0 28px;
    box-sizing : border-box;
`
export const OptionDropDown = styled.div`
    height : 156px;
    width : 305px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    position : relative;
    background : black;
    box-sizing : border-box;
`

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
    transform : rotate(180deg);
`;

export const Btn = styled.button`
    width : 25px;
    height : 25px;
    border : none;
    background-color : white;
    display : inline-flex;
    align-items : center;
    justify-content : center;
`

export const NumMember = styled.p`
    font-size : 24px;
    font-weight : 800;
    line-height : 29px;
    color : #FB1E53;
    padding-bottom : 4px;
`