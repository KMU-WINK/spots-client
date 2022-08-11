import React from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon } from '../common';

const Condition = () => {
    return(
        <Container>
            <Box>
                <Text>
                    매칭 조건 설정
                </Text>
                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            인원
                        </styled.OptionText>
                        <styled.OptionInfo>
                            모집 인원을 설정해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionDataDiv width="170">
        
                    </styled.OptionDataDiv>
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            동네
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭글을 보여줄 동네를 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionDataDiv>
        
                    </styled.OptionDataDiv>
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox>
                    <styled.Option>
                        <styled.OptionText>
                            성별
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭을 원하는 성별을 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionDataDiv>
        
                    </styled.OptionDataDiv>
                </styled.OptionBox>
                <Horizon />

                <styled.OptionBox marginBot="0">
                    <styled.Option>
                        <styled.OptionText>
                            레벨
                        </styled.OptionText>
                        <styled.OptionInfo>
                            매칭을 원하는 운동 레벨을 선택해주세요.
                        </styled.OptionInfo>
                    </styled.Option>
                    <styled.OptionDataDiv>
        
                    </styled.OptionDataDiv>
                </styled.OptionBox>

            </Box>
        </Container>
    )
}

export default Condition;