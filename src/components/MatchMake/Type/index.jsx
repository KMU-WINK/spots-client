import React, { useState } from 'react';
import * as styled from './styles';
import { Container, Box, Text, Horizon, GetInform } from '../common';
// import sports_img from '../../../imgs/MatchMake/sports_img';
import {Basketball, Football, Baseball, Volleyball, AFootball, Tennis, Etc} from '../sports';



const Type = () => {

    const [isSelect, setIsSelect] = useState({
        "basketball" : false,
        "football" : false,
        "baseball" : false,
        "volleyball" : false,
        "aFootball" : false,
        "tennis" : false,
        "badminton" : false,
        "etc" : false
    })

    const updateSelect = (sport) => {
        return ({
            "basketball" : ("basketball" == sport),
            "football" : ("football" == sport),
            "baseball" : ("baseball" == sport),
            "volleyball" : ("volleyball" == sport),
            "aFootball" : ("aFootball" == sport),
            "tennis" : ("tennis" == sport),
            "badminton" : ("badminton" == sport),
            "etc" : ("etc" == sport),
        })
    }

    const onSelect = (e) => {
        const sport = e.currentTarget
        setIsSelect(updateSelect(sport.name));
        
    }

    return(
        <Container>
            <Box>
                <Text>
                    스포츠 종목
                </Text>
                <styled.sportsBox>
                    <styled.eachSports name="basketball" onClick={onSelect}><Basketball color={isSelect["basketball"] ? "#FB1E53" : null}/></styled.eachSports>
                    <styled.eachSports name="football" onClick={onSelect}><Football color={isSelect["football"] ? "#FB1E53" : null}/></styled.eachSports>
                    <styled.eachSports name="baseball" onClick={onSelect}><Baseball color={isSelect["baseball"] ? "#FB1E53" : null}/></styled.eachSports>
                    <styled.eachSports name="volleyball" onClick={onSelect}><Volleyball color={isSelect["volleyball"] ? "#FB1E53" : null}/></styled.eachSports>
                    <styled.eachSports name="aFootball" onClick={onSelect}><AFootball color={isSelect["aFootball"] ? "#FB1E53" : null}/></styled.eachSports>
                    <styled.eachSports name="tennis" onClick={onSelect}><Tennis color={isSelect["tennis"] ? "#FB1E53" : null}/></styled.eachSports>
                    {/* <Badminton /> */}
                    {/* <Etc /> */}
                </styled.sportsBox>
                <GetInform placeholder="제시된 아이콘 이외의 종목을 원하실 경우 해당 칸에 입력해 주세요." marginTop="30px"/>
            </Box>
        </Container>
    )
}

export default Type;

// {sports_img.map((sports) => {
//     return(
//         <styled.styled.eachSports key={sports.key}>
//             <sports.value />
//             {/* <styled.sports_img src={sports.src} /> */}
//             <styled.sportsText>
//                 {sports.key}
//             </styled.sportsText>
//         </styled.styled.eachSports>
//     ) ;   
//     })
// }   