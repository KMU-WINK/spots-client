import styled from 'styled-components';


export const MatchMakeContainer = styled.div`

  width : 1194px;
  display : flex;
  flex-direction : column;
  align-items: center;
`;

export const SportsBox = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`

export const sportsText = styled.span`
    margin-top : 6px;
    font-size : 14px;
    line-height : 17px;
    font-weight: 800;
    font-style: normal;
    color: ${(props) => props.fontColor || "#858585"};
`