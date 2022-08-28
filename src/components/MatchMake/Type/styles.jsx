import styled from 'styled-components';

export const sportsBox = styled.div`
    margin-top : 20px;
    margin-left : 9px;
    display : flex;
`

export const eachSports = styled.button`
    display : inline-flex;
    flex-direction : column;
    align-items : center;
    margin-right : 70px;
    border : none;
    background : none;
`

export const sports_img = styled.img.attrs(props => ({
    src: props.src,
    path : props.src.path,
  }))`
    width: 40px;
    height: 40px;
`