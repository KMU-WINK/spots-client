import React from 'react';
import * as styled from './styles';

const Location = () => {
    return(
        <styled.LocationContainer>
            <styled.LocationBox>
                <styled.LocationText>
                    매칭 장소
                </styled.LocationText>
                <styled.PlaceInform>
                    <styled.Place />
                    <styled.PlaceText>
                        OO구 OO동 OO공원
                    </styled.PlaceText>
                </styled.PlaceInform>
                
            </styled.LocationBox>
        </styled.LocationContainer>
    )
}

export default Location;