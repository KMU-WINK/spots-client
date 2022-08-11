import React from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon, GetInform, CheckBox, OnCheck } from '../common';

const Location = () => {
    return(
        <Container>
            <Box>
                <styled.LocationTopBox>
                    <styled.TopLeft>
                        <Text>
                            매칭 장소
                        </Text>
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
                            <GetInform placeholder="주소를 검색해주세요. (ex. 지번(신대방동), 도로명(신대방길))" width="465px"/>
                            <styled.SearchBtn>
                                검색
                            </styled.SearchBtn>
                            <styled.Clear />
                        </styled.LocationGetBox>
                    </styled.TopLeft>
                    <styled.Map />
                </styled.LocationTopBox>
                <Horizon />
                <styled.ExpectedCost>
                    <Text>
                        예상 비용
                    </Text>
                    <styled.NoCost>
                        ※ 비용없음
                    </styled.NoCost>
                    <CheckBox margin="12px 0 0 9px"/>
                    <OnCheck />
                </styled.ExpectedCost>
                <GetInform placeholder="예상되는 비용을 입력해주세요. (ex. 입장료, 대여비, ...)" marginTop="20px"/>
            </Box>
        </Container>
    )
}

export default Location;