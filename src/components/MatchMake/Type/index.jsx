import React from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon, GetInform } from '../common';
import sports_img from '../../../imgs/MatchMake/sports_img';



const Type = () => {
    return(
        <Container>
            <Box>
                <Text>
                    스포츠 종목
                </Text>
                <styled.sportsBox>
                    {sports_img.map((sports) => {
                        return(
                            <styled.eachSports key={sports.name}>
                                <styled.sports_img src={sports.src} />
                                <styled.sportsText>
                                    {sports.name}
                                </styled.sportsText>
                            </styled.eachSports>
                        ) ;   
                    })
                    }   
                </styled.sportsBox>
                <GetInform placeholder="제시된 아이콘 이외의 종목을 원하실 경우 해당 칸에 입력해 주세요." marginTop="30px"/>
            </Box>
        </Container>
    )
}

export default Type;