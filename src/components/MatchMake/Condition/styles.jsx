import styled from 'styled-components';


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

export const OptionDataDiv = styled.div`
    height : 50px;
    width : ${(props) => props.width || 305}px;
    border-radius : 12px;
    border: 1px solid #FB1E53;
    margin-top : 12px;
    display : flex;
    justify-content : space-between;
`