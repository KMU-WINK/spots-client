import React from 'react';
import * as styled from './styles';

const Location = () => {
    return(
        <styled.LocationContainer>
            <styled.LocationBox>
                <styled.LocationTopBox>
                    <styled.TopLeft>
                        <styled.LocationText>
                            매칭 장소
                        </styled.LocationText>
                        <styled.PlaceInform>
                            <styled.Place />
                            <styled.PlaceText>
                                OO구 OO동 OO공원
                            </styled.PlaceText>
                        </styled.PlaceInform>
                        <styled.PlaceAddress>
                            주소(지도 상의 주소)
                        </styled.PlaceAddress>
                        <styled.LocationGetBox>
                            <styled.LocationGet />
                            <styled.SearchBtn>
                                검색
                            </styled.SearchBtn>
                        </styled.LocationGetBox>
                    </styled.TopLeft>
                    <styled.Map />
                </styled.LocationTopBox>
                <styled.Horizon />
                <styled.LocationText marginTop="17">
                    예상 비용
                </styled.LocationText>
            </styled.LocationBox>
        </styled.LocationContainer>
    )
}

export default Location;