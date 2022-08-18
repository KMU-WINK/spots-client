import React, { useState } from 'react';
import * as styled from './styles';

const Title = () => {

    const [matchTitle, setMatchTitle] = useState('');
    const matchTitleHandler = (e) =>{
        setMatchTitle(e.target.value)
    }

    return(
        <styled.TitleContainer>
            <styled.TitleBox>
                <styled.TitleText>
                    제목
                </styled.TitleText>
                <styled.TitleGet value={matchTitle} onChange={matchTitleHandler} maxLength='15'>
                {/* placeholder={"최대 15자 이내의 제목을 입력해주세요."} */}
                </styled.TitleGet>
            </styled.TitleBox>
        </styled.TitleContainer>

    )
}

export default Title;