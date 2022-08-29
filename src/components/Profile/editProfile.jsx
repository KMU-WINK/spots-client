import React, { useState } from 'react';
import GlobalStyleProfile from './GlobalStyleProfile';
import * as styled from './styles';
import {
  Basketball,
  Football,
  Baseball,
  Volleyball,
  AFootball,
  Tennis,
} from './sports';
import TimeTable from '../TimeTable';
import Etc from '../../imgs/MatchMake/sports_img/sports_etc.svg';
import { keyframes } from 'styled-components';

const editProfile = () => {
  const weekList = ['월', '화', '수', '목', '금', '토', '일'];
  const [week, setWeek] = useState('월');

  const handleWeek = e => {
    setWeek(e.target.value);
  };

  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [endHour, setEndHour] = useState('');
  const [endMinute, setEndMinute] = useState('');

  const onStartHourHandler = e => {
    setStartHour(e.target.value)
  };
  const onStartMinuteHandler = e => {
    setStartMinute(e.target.value)
  };
  const onEndHourHandler = e => {
    setEndHour(e.target.value)
  };
  const onEndMinuteHandler = e => {
    setEndMinute(e.target.value)
  };

  const [scheduleList, setScheduleList] = useState([
    {  "id" : 1, 
      "day" : "월",
      "time" : "10:00 ~ 13:00"},
])

  const onAddSchedule = e => {
    if (startHour=="" || startMinute=="" || endHour=="" || endMinute==""){
      alert("시간을 모두 입력해 주세요.")
    } else {
      var id = 1;
      if (scheduleList.length) {
        id = scheduleList[scheduleList.length-1]["id"]+1
      }
      const day = week;
      const time = startHour+':'+startMinute+" ~ "+endHour+':'+endMinute
      const newSchedule = {
        "id" : id,
        "day" : day,
        "time" : time
      }
      setScheduleList([...scheduleList, newSchedule])
      setStartHour('')
      setStartMinute('')
      setEndHour('')
      setEndMinute('')
    }
  }

  const onDeleteSchedule = e => {
    const id = e.currentTarget.name
    console.log(id)
    setScheduleList(scheduleList.filter(item => item.id!=id))
    console.log(scheduleList)
  }


  const [getLocation, setGetLocation] = useState('');
  const clearGetLocation = () => {
    setGetLocation('');
  };

  const getLocationHandler = e => {
    const location = e.target.value;
    setGetLocation(location);
  };

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

  const onSelect = e => {
    const sport = e.currentTarget.name;
    setIsSelect(prevState => ({
      ...prevState,
      [sport]: !isSelect[sport],
    }));
  };

  return (
    <styled.ProfileContainer>
      <GlobalStyleProfile />
      <styled.TimeTable>
        <styled.CalendarCheck />
        <styled.Text marginLeft="17px">운동 시간표 입력</styled.Text>
      </styled.TimeTable>
      <styled.EnterTimeContainer>
        <styled.weekContainer>
          {weekList.map(item => (
            <styled.weekBtn
              value={item}
              key={item}
              onClick={handleWeek}
              backColor={week == item ? '#FB1E53' : 'white'}
              color={week == item ? 'white' : 'black'}
            >
              {item}
            </styled.weekBtn>
          ))}
        </styled.weekContainer>

        <styled.AddTimeBox>
          <styled.TimeGetContainer>
            <styled.TimeGetBox>
              <styled.Watch />
              <styled.TimeGet marginLeft="32px">
                <styled.TimeGetTime
                  placeholder="17"
                  onChange={onStartHourHandler}
                  value={startHour}
                  maxLength={2}
                />
                <styled.Colon>:</styled.Colon>
                <styled.TimeGetTime
                  placeholder="00"
                  direction="right"
                  onChange={onStartMinuteHandler}
                  value={startMinute}
                  maxLength={2}
                />
              </styled.TimeGet>

              <styled.Inform marginLeft="20px"> ~ </styled.Inform>

              <styled.TimeGet marginLeft="20px">
                <styled.TimeGetTime
                  placeholder="18"
                  onChange={onEndHourHandler}
                  value={endHour}
                  maxLength={2}
                />
                <styled.Colon>:</styled.Colon>
                <styled.TimeGetTime
                  placeholder="00"
                  direction="right"
                  onChange={onEndMinuteHandler}
                  value={endMinute}
                  maxLength={2}
                />
              </styled.TimeGet>
            </styled.TimeGetBox>
            <styled.Inform marginTop="12px">
              ※ 최소 1시간 단위로 운동 시간을 입력해주세요.
            </styled.Inform>
          </styled.TimeGetContainer>
          <styled.Btn onClick={onAddSchedule}>추가하기+</styled.Btn>
        </styled.AddTimeBox>
      </styled.EnterTimeContainer>


      <styled.ScheduleContainer>



        {scheduleList.map( (item,index) => (
          <styled.ScheduleBox key={index}>
            <styled.Schedule>
              <styled.CalendarCheck />
              <styled.TimeInform marginLeft="32px">
                {item["day"]}
              </styled.TimeInform>
              <styled.TimeInform marginLeft="16px">
                {item["time"]}
              </styled.TimeInform>
            </styled.Schedule>
            <styled.Btn backColor="#858585" name={item["id"]} onClick={onDeleteSchedule}>삭제하기-</styled.Btn>
          </styled.ScheduleBox>
        ))}

      </styled.ScheduleContainer>

      <styled.TimeTableContainer>
        <TimeTable />
      </styled.TimeTableContainer>

      <styled.Text marginTop="80px">거주지</styled.Text>
      <styled.Section marginTop="24px">
        <styled.SectionInform>
          <styled.PlaceInform marginTop="0px">
            <styled.Place />
            <styled.InformText marginLeft="8px">
              OO구 OO동 OO공원 (유저가 입력한 이름)
            </styled.InformText>
          </styled.PlaceInform>
          <styled.PlaceAddress>주소(지도 상의 주소)</styled.PlaceAddress>

          <styled.LocationGetBox>
            <styled.GetInform
              placeholder="주소를 검색해주세요. (ex. 지번(신대방동), 도로명(신대방길))"
              width="480px"
              value={getLocation}
              onChange={getLocationHandler}
            />
            <styled.SearchBtn>검색</styled.SearchBtn>
            <styled.ClearBtn>
              <styled.Clear onClick={clearGetLocation} />
            </styled.ClearBtn>
          </styled.LocationGetBox>

          <styled.publicContainer marginTop="32px">
            <styled.InformText>공개여부</styled.InformText>
          </styled.publicContainer>
        </styled.SectionInform>
        <styled.Map width="378px" height="210px" />
      </styled.Section>

      <styled.Text marginTop="100px">즐겨찾는 장소(주요 운동 장소)</styled.Text>
      <styled.Section marginTop="24px">
        <styled.SectionInform>
          <styled.PlaceInform marginTop="0px">
            <styled.Place />
            <styled.InformText marginLeft="8px">
              OO구 OO동 OO공원 (유저가 입력한 이름)
            </styled.InformText>
          </styled.PlaceInform>
          <styled.PlaceAddress>주소(지도 상의 주소)</styled.PlaceAddress>

          <styled.LocationGetBox>
            <styled.GetInform
              placeholder="주소를 검색해주세요. (ex. 지번(신대방동), 도로명(신대방길))"
              width="480px"
              value={getLocation}
              onChange={getLocationHandler}
            />
            <styled.SearchBtn>검색</styled.SearchBtn>
            <styled.ClearBtn>
              <styled.Clear onClick={clearGetLocation} />
            </styled.ClearBtn>
          </styled.LocationGetBox>

          <styled.publicContainer marginTop="32px">
            <styled.InformText>공개여부</styled.InformText>
          </styled.publicContainer>
        </styled.SectionInform>
        <styled.Map width="378px" height="210px" />
      </styled.Section>

      <styled.Text marginTop="100px">내가 선호하는 스포츠</styled.Text>
      <styled.EditSportsContainer padding="52px 72px 48px">
        <styled.EditSportsBox>
          <styled.EachSports name="basketball" onClick={onSelect}>
            <Basketball color={isSelect['basketball'] ? '#FB1E53' : null} />
          </styled.EachSports>
          <styled.EachSports name="football" onClick={onSelect}>
            <Football color={isSelect['football'] ? '#FB1E53' : null} />
          </styled.EachSports>
          <styled.EachSports name="baseball" onClick={onSelect}>
            <Baseball color={isSelect['baseball'] ? '#FB1E53' : null} />
          </styled.EachSports>
          <styled.EachSports name="volleyball" onClick={onSelect}>
            <Volleyball color={isSelect['volleyball'] ? '#FB1E53' : null} />
          </styled.EachSports>
          <styled.EachSports name="aFootball" onClick={onSelect}>
            <AFootball color={isSelect['aFootball'] ? '#FB1E53' : null} />
          </styled.EachSports>
          <styled.EachSports name="tennis" onClick={onSelect}>
            <Tennis color={isSelect['tennis'] ? '#FB1E53' : null} />
          </styled.EachSports>
        </styled.EditSportsBox>

        <styled.Horizon marginTop="40px" />
        <styled.EtcSports>
          <styled.EachSports name="etc" onClick={onSelect}>
            <img src={Etc} /> 기타
          </styled.EachSports>
          <styled.GetInform
            placeholder="6글자 이내로 기타 종목을 입력해 주세요."
            width="356px"
            height="40px"
          />
        </styled.EtcSports>
      </styled.EditSportsContainer>

      <styled.MatchingRegister>
        <styled.ResisterBtn>프로필 저장하기</styled.ResisterBtn>
      </styled.MatchingRegister>
    </styled.ProfileContainer>
  );
};

export default editProfile;
