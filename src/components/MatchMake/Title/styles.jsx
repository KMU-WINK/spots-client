import styled from 'styled-components';

export const TitleContainer = styled.div`
    width: 60%;
    height: 8.5vw;
    display : flex;
    align-items: center;
    justify-content : center;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 2vw;
`

export const TitleBox = styled.div`
    width : 90%;
    height : 80%;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
`;

export const TitleText = styled.p`
    font-size : 1.3vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.6vw;
`

export const TitleGet = styled.input.attrs({
    type : 'text',
    placeholderTextColor: "#fffff",
})`
    font-size : 0.65vw;
    font-weight: 500;
    font-style: normal;
    border-radius : 12px;
    padding : 0.8vw;
`