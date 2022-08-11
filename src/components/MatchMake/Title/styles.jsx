import styled from 'styled-components';

export const TitleContainer = styled.div`
    width: 100%;
    // height: 188px;
    display : flex;
    box-shadow: 0px 4px 24px -1px rgba(0,0,0,0.25);
    border-radius: 12px;
    margin-top : 48px;
`

export const TitleBox = styled.div`
    width : 90%;
    margin : 40px 72px;
    display : flex;
    flex-direction : column;
`;

export const TitleText = styled.p`
    font-size : 32px;
    font-weight: 700;
    line-height : 38px;
    font-style: normal;
`

export const TitleGet = styled.input.attrs({
    placeholder : "최대 15자 이내의 제목을 입력해주세요.",
})`
    width : 990px;
    margin-top : 20px;
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
