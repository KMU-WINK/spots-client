import React from 'react';
import * as styled from './styles';

const Title = () => {
    return(
        <styled.TitleBox>
            <styled.TitleText>
                제목
            </styled.TitleText>
            <styled.TitleGet placeholder={"최대 15자 이내의 제목을 입력해주세요."}>
                
            </styled.TitleGet>
        </styled.TitleBox>
    )
}

export default Title;