import React from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon, GetInform, ReferText, CheckBox } from '../common';

const Contact = () => {
    return(
        <Container>
            <Box>
                <Text>
                    연락 수단 및 프로필 공개
                </Text>
                <ReferText>
                    ※ 매칭 전 문의사항, 매칭 이후 팀원과의 연락 등은 카카오톡 오픈채팅으로 이루어집니다.
                </ReferText>
                <GetInform placeholder="복사한 카카오톡 오픈채팅방 링크를 붙여넣기 해주세요." marginTop="20px"/>
                <styled.WarningText>
                    ※ 오픈채팅방 링크 형식을 확인해주세요.
                </styled.WarningText>
                <Horizon />
                <styled.OpenProfile>
                    <styled.Text>
                        프로필 공개하기
                    </styled.Text>
                    <CheckBox margin="1px 0 0 18px"/>
                </styled.OpenProfile>

                <ReferText>
                ※ 매칭 글에 호스트인 OO님의 운동 정보가 담긴 프로필이 올라가면 매칭률이 더 높아질 수 있어요.
                </ReferText>
            </Box>
        </Container>
    )
}

export default Contact;