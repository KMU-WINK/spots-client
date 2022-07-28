import styled from 'styled-components';

export const TitleBox = styled.div`
    width: 60%;
    height: 6.5vw;
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content : space-evenly;
    background-color : white;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 2vw;
`;

export const TitleText = styled.p`
    font-size : 1.3vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.6vw;
    // background-color : blue;
    width : 89%;
`

export const TitleGet = styled.input.attrs({
    type : 'text',
    placeholderTextColor: "#fffff",
})`
    font-size : 0.65vw;
    font-weight: 500;
    font-style: normal;
    width : 87%;
    border-radius : 12px;
    padding : 0.5vw;
`