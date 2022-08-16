import React, {useState} from 'react';
import * as styled from './styles';
import * as common from './common'
import GlobalStyleProfile from './GlobalStyleProfile';
import {Basketball, Football, Baseball, Volleyball, AFootball, Tennis, Etc} from '../MatchMake/sports';

const Test = () => {

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

    const onSelect = (e) => {
        // const sport = e.currentTarget
        // setIsSelect(updateSelect(sport.name));
        
    }

    return(
        <common.ProfileContainer>
            <GlobalStyleProfile />
            <common.TimeTable>
                <common.CalendarCheck />
                <common.Text marginLeft="17px">
                    운동 시간표
                </common.Text>
            </common.TimeTable>
            <common.TempContainer></common.TempContainer>
            <common.Section>
                <common.SectionInform>
                    <common.Text>
                        거주지
                    </common.Text>
                    <common.PlaceInform>
                        <common.Place />
                        <common.PlaceText>
                            OO구 OO동 OO공원 (유저가 입력한 이름)
                        </common.PlaceText>
                    </common.PlaceInform>
                    <common.PlaceAddress>
                        주소(지도 상의 주소)
                    </common.PlaceAddress>
                </common.SectionInform>
                <common.Map />
            </common.Section>


            <common.Section>
                <common.SectionInform>
                    <common.Text>
                        즐겨찾는 장소( 중요 운동 장소 )
                    </common.Text>
                    <common.PlaceInform>
                        <common.Place />
                        <common.PlaceText>
                            OO구 OO동 OO공원 (유저가 입력한 이름)
                        </common.PlaceText>
                    </common.PlaceInform>
                    <common.PlaceAddress>
                        주소(지도 상의 주소)
                    </common.PlaceAddress>
                </common.SectionInform>
                <common.Map />
            </common.Section>
            
            <common.Text marginTop="100px">
                내가 선호하는 스포츠
            </common.Text>
            <common.SportsContainer>
                <common.EachSports name="basketball" onClick={onSelect}><Basketball color={isSelect["basketball"] ? "#FB1E53" : null}/></common.EachSports>
                <common.EachSports name="football" onClick={onSelect}><Football color={isSelect["football"] ? "#FB1E53" : null}/></common.EachSports>
                <common.EachSports name="baseball" onClick={onSelect}><Baseball color={isSelect["baseball"] ? "#FB1E53" : null}/></common.EachSports>
                <common.EachSports name="volleyball" onClick={onSelect}><Volleyball color={isSelect["volleyball"] ? "#FB1E53" : null}/></common.EachSports>
                <common.EachSports name="aFootball" onClick={onSelect}><AFootball color={isSelect["aFootball"] ? "#FB1E53" : null}/></common.EachSports>
                <common.EachSports name="tennis" onClick={onSelect}><Tennis color={isSelect["tennis"] ? "#FB1E53" : null}/></common.EachSports>
                {/* <Badminton /> */}
                {/* <Etc /> */}
            </common.SportsContainer>
            <styled.tempDiv>
            <styled.EditButton>
                수정하기
            </styled.EditButton>
            </styled.tempDiv>
            
            
        </common.ProfileContainer>
    )
}

export default Test;