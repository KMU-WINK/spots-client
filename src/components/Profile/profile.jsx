import React, { useState } from 'react';
import * as styled from './styles';
import GlobalStyleProfile from './GlobalStyleProfile';
import Basketball from '../../imgs/MatchMake/sports_img/sports_basketball.svg';
import Football from '../../imgs/MatchMake/sports_img/sports_football.svg';
import Baseball from '../../imgs/MatchMake/sports_img/sports_baseball.svg';
import Volleyball from '../../imgs/MatchMake/sports_img/sports_volleyball.svg';
import AFootball from '../../imgs/MatchMake/sports_img/sports_a_football.svg';
import Tennis from '../../imgs/MatchMake/sports_img/sports_tennis.svg';
import Badminton from '../../imgs/MatchMake/sports_img/sports_badminton.svg';
import Etc from '../../imgs/MatchMake/sports_img/sports_etc.svg';
import TimeTable from '../TimeTable';
import EditProfile from './editProfile';

const profile = () => {
  const [isSelect, setIsSelect] = useState({
    basketball: false,
    football: true,
    baseball: true,
    volleyball: false,
    aFootball: false,
    tennis: false,
    badminton: false,
    etc: false,
  });

  const [modify, setModify] = useState(false);

  return !modify ? (
    <styled.ProfileContainer>
      <GlobalStyleProfile />
      <styled.TimeTable>
        <styled.CalendarCheck />
        <styled.Text marginLeft="17px">운동 시간표</styled.Text>
      </styled.TimeTable>
      <styled.TimeTableContainer>
        <TimeTable />
      </styled.TimeTableContainer>
      <styled.Section>
        <styled.SectionInform>
          <styled.Text>거주지</styled.Text>
          <styled.PlaceInform>
            <styled.Place />
            <styled.InformText marginLeft="8px">
              OO구 OO동 OO공원 (유저가 입력한 이름)
            </styled.InformText>
          </styled.PlaceInform>
          <styled.PlaceAddress>주소(지도 상의 주소)</styled.PlaceAddress>
          <styled.publicContainer>
            <styled.InformText>공개여부</styled.InformText>
            <styled.publicBox>공개</styled.publicBox>
          </styled.publicContainer>
        </styled.SectionInform>
        <styled.Map />
      </styled.Section>

      <styled.Section>
        <styled.SectionInform>
          <styled.Text>즐겨찾는 장소( 중요 운동 장소 )</styled.Text>
          <styled.PlaceInform>
            <styled.Place />
            <styled.InformText marginLeft="8px">
              OO구 OO동 OO공원 (유저가 입력한 이름)
            </styled.InformText>
          </styled.PlaceInform>
          <styled.PlaceAddress>주소(지도 상의 주소)</styled.PlaceAddress>
          <styled.publicContainer>
            <styled.InformText>공개여부</styled.InformText>
            <styled.publicBox>공개</styled.publicBox>
          </styled.publicContainer>
        </styled.SectionInform>
        <styled.Map />
      </styled.Section>

      <styled.Text marginTop="100px">내가 선호하는 스포츠</styled.Text>
      <styled.SportsContainer padding="44px 72px 72px 72px">
        <styled.SportSelect id="basketball" select={isSelect['basketball']}>
          <img src={Basketball} />
          <span>농구</span>
        </styled.SportSelect>
        <styled.SportSelect id="football" select={isSelect['football']}>
          <img src={Football} />
          <span>축구</span>
        </styled.SportSelect>
        <styled.SportSelect id="baseball" select={isSelect['baseball']}>
          <img src={Baseball} />
          <span>야구</span>
        </styled.SportSelect>
        <styled.SportSelect id="volleyball" select={isSelect['volleyball']}>
          <img src={Volleyball} />
          <span>배구</span>
        </styled.SportSelect>
        <styled.SportSelect id="afootball" select={isSelect['afootball']}>
          <img src={AFootball} />
          <span>미식축구</span>
        </styled.SportSelect>
        <styled.SportSelect id="tennis" select={isSelect['tennis']}>
          <img src={Tennis} />
          <span>테니스</span>
        </styled.SportSelect>
        <styled.SportSelect id="badminton" select={isSelect['badminton']}>
          <img src={Badminton} />
          <span>배드민턴</span>
        </styled.SportSelect>
        <styled.SportSelect id="etc" select={isSelect['etc']}>
          <img src={Etc} />
          <span>기타</span>
        </styled.SportSelect>
      </styled.SportsContainer>
      <styled.ButtonContainer>
        <styled.EditButton onClick={() => setModify(true)}>
          수정하기
        </styled.EditButton>
      </styled.ButtonContainer>
    </styled.ProfileContainer>
  ) : (
    <EditProfile />
  );
};

export default profile;
