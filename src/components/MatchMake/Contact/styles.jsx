import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 60%;
    height: 16.5vw;
    display : flex;
    align-items: center;
    justify-content : center;
    background-color : white;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 2vw;
`;

export const ContactBox = styled.div`
    width : 90%;
    height : 80%;
    display : flex;
    flex-direction : column;
`

export const ContactText = styled.p`
    font-size : 1.3vw;
    font-weight: 700;
    font-style: normal;
    line-height: 1.6vw;
`