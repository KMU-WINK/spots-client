import styled from 'styled-components';
import check from '../../imgs/MatchMake/check.svg';

export const Container = styled.div`
    width: 100%;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 32px;
`;

export const Box = styled.div`
    width : 90%;
    margin : 40px 72px;
    display : flex;
    flex-direction : column;
`

export const Text = styled.p`
    font-size : 32px;
    line-height : 38px;
    font-weight: 700;
    font-style: normal;
    margin-top : ${(props) => props.marginTop || "0px"}
`

export const Horizon = styled.hr`
    height : 1px;
    border  : none;
    background : #D3D3D3;
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

export const ReferText = styled.p`
    margin-top : ${(props) => props.marginTop || "8px"};
    font-size : 20px;
    line-height : 24px;
    font-weight: 500;
    font-style: normal;
`

export const CheckBox = styled.button`
    margin : ${(props) => props.margin || "0 0 0 0"};
    border-radius : 5px;
    width : 24px;
    height : 24px;
    border: 1px solid #FB1E53;
    background-color : white;
`

export const OnCheck = styled.img.attrs({
    src: check,
  })`
    width: 24px;
    height: 24px;
`;