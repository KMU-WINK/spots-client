import React, {useState} from 'react';
import * as styled from './styles';
import GlobalStyleProfile from './GlobalStyleProfile';
import {Basketball, Football, Baseball, Volleyball, AFootball, Tennis, Etc} from './sports';

const profile = () => {

    const [isSelect, setIsSelect] = useState({
        "basketball" : false,
        "football" : true,
        "baseball" : true,
        "volleyball" : false,
        "aFootball" : false,
        "tennis" : false,
        "badminton" : false,
        "etc" : false
    })


    return(
        <styled.ProfileContainer>
            <GlobalStyleProfile />
            <styled.TimeTable>
                <styled.CalendarCheck />
                <styled.Text marginLeft="17px">
                    운동 시간표
                </styled.Text>
            </styled.TimeTable>
            <styled.TempContainer></styled.TempContainer>
            <styled.Section>
                <styled.SectionInform>
                    <styled.Text>
                        거주지
                    </styled.Text>
                    <styled.PlaceInform>
                        <styled.Place />
                        <styled.InformText marginLeft="8px">
                            OO구 OO동 OO공원 (유저가 입력한 이름)
                        </styled.InformText>
                    </styled.PlaceInform>
                    <styled.PlaceAddress>
                        주소(지도 상의 주소)
                    </styled.PlaceAddress>
                    <styled.publicContainer>
                        <styled.InformText>
                            공개여부
                        </styled.InformText>
                        <styled.publicBox>
                            공개
                        </styled.publicBox>
                    </styled.publicContainer>
                </styled.SectionInform>
                <styled.Map />
            </styled.Section>


            <styled.Section>
                <styled.SectionInform>
                    <styled.Text>
                        즐겨찾는 장소( 중요 운동 장소 )
                    </styled.Text>
                    <styled.PlaceInform>
                        <styled.Place />
                        <styled.InformText marginLeft="8px">
                            OO구 OO동 OO공원 (유저가 입력한 이름)
                        </styled.InformText>
                    </styled.PlaceInform>
                    <styled.PlaceAddress>
                        주소(지도 상의 주소)
                    </styled.PlaceAddress>
                    <styled.publicContainer>
                        <styled.InformText>
                            공개여부
                        </styled.InformText>
                        <styled.publicBox>
                            공개
                        </styled.publicBox>
                    </styled.publicContainer>
                </styled.SectionInform>
                <styled.Map />
            </styled.Section>
            
            <styled.Text marginTop="100px">
                내가 선호하는 스포츠
            </styled.Text>
            <styled.SportsContainer padding="53px 0 72px 71px">
                <styled.EachSports name="basketball" ><Basketball color={isSelect["basketball"] ? "#FB1E53" : null}/></styled.EachSports>
                <styled.EachSports name="football" ><Football color={isSelect["football"] ? "#FB1E53" : null}/></styled.EachSports>
                <styled.EachSports name="baseball" ><Baseball color={isSelect["baseball"] ? "#FB1E53" : null}/></styled.EachSports>
                <styled.EachSports name="volleyball" ><Volleyball color={isSelect["volleyball"] ? "#FB1E53" : null}/></styled.EachSports>
                <styled.EachSports name="aFootball" ><AFootball color={isSelect["aFootball"] ? "#FB1E53" : null}/></styled.EachSports>
                <styled.EachSports name="tennis"><Tennis color={isSelect["tennis"] ? "#FB1E53" : null}/></styled.EachSports>
                {/* <Badminton /> */}
                {/* <Etc /> */}
            </styled.SportsContainer>
            <styled.ButtonContainer>
            <styled.EditButton>
                수정하기
            </styled.EditButton>
            </styled.ButtonContainer>
            
            
        </styled.ProfileContainer>
    )
}

export default profile;