import React, { useState } from 'react';
import * as styled from './styles';
import GlobalStyleMatchMake from './GlobalStyleMatchMake';
import minus from '../../imgs/MatchMake/minus.svg';
import plus from '../../imgs/MatchMake/plus.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Basketball from '../../imgs/MatchMake/sports_img/sports_basketball.svg';
import Football from '../../imgs/MatchMake/sports_img/sports_football.svg';
import Baseball from '../../imgs/MatchMake/sports_img/sports_baseball.svg';
import Volleyball from '../../imgs/MatchMake/sports_img/sports_volleyball.svg';
import AFootball from '../../imgs/MatchMake/sports_img/sports_a_football.svg';
import Tennis from '../../imgs/MatchMake/sports_img/sports_tennis.svg';
import Badminton from '../../imgs/MatchMake/sports_img/sports_badminton.svg';
import Etc from '../../imgs/MatchMake/sports_img/sports_etc.svg';
import { useNavigate } from 'react-router-dom';

const MatchMake = () => {
  const [isValidate, setIsValidate] = useState({
    isTitleValidate: false,
    isHourValidate: false,
    isMinuteValidate: false,
    isLocationValidate: false,
    isNoCostChecked: false,
    isCostValidate: false,
    isSportsValidate: false,
    isContactValidate: false,
  });

  const navigator = useNavigate();
  const updateValidate = e => {};

  // Title
  const [matchTitle, setMatchTitle] = useState('');
  const matchTitleHandler = e => {
    const title = e.target.value;
    setMatchTitle(title);
    setIsValidate(prevState => ({
      ...prevState,
      isTitleValidate: title.length ? true : false,
    }));
  };

  // Date
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Time
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const onHourHandler = e => {
    const hour = e.target.value;
    setHour(hour);
    setIsValidate(prevState => ({
      ...prevState,
      isHourValidate: hour.length ? true : false,
    }));
  };

  const onMinuteHandler = e => {
    const minute = e.target.value;
    setMinute(minute);
    setIsValidate(prevState => ({
      ...prevState,
      isMinuteValidate: minute.length ? true : false,
    }));
  };

  // Location
  const [getLocation, setGetLocation] = useState('');
  const clearGetLocation = () => {
    setGetLocation('');
  };

  const getLocationHandler = e => {
    const location = e.target.value;
    setGetLocation(location);
    setIsValidate(prevState => ({
      ...prevState,
      isLocationValidate: location.length ? true : false,
    }));
  };

  // Cost

  const [isNoCost, setIsNoCost] = useState(false);
  const onCheck = () => {
    setIsNoCost(!isNoCost);
    setIsValidate(prevState => ({
      ...prevState,
      isNoCostChecked: !isNoCost,
    }));
  };

  const [getCost, setGetCost] = useState('');
  const getCostHandler = e => {
    const cost = e.target.value;
    setGetCost(cost);
    setIsValidate(prevState => ({
      ...prevState,
      isCostValidate: cost.length ? true : false,
    }));
  };

  // Condition
  const [numMember, setNumMember] = useState(1);

  const townList = [
    '서초 1동',
    '서초 2동',
    '서초 3동',
    '정릉 1동',
    '정릉 2동',
    '정릉 3동',
  ];
  const [town, setTown] = useState('서초 1동');

  const handleTown = e => {
    setTown(e.target.value);
    clearRotate();
  };

  const sexList = ['둘 다', '여자만', '남자만'];
  const [sex, setSex] = useState('둘 다');

  const handleSex = e => {
    setSex(e.target.value);
    clearRotate();
  };

  const [level, setLevel] = useState('상');
  const levelList = ['상', '중', '하'];

  const handleLevel = e => {
    setLevel(e.target.value);
    clearRotate();
  };

  const onIncMember = () => {
    if (numMember < 22) {
      setNumMember(numMember + 1);
    }
  };
  const onDecMember = () => {
    if (numMember > 1) {
      setNumMember(numMember - 1);
    }
  };

  const [isRotate, setIsRotate] = useState({
    town: false,
    sex: false,
    level: false,
  });

  const updateRotate = type => {
    return {
      town: 'town' == type,
      sex: 'sex' == type,
      level: 'level' == type,
    };
  };

  const clearRotate = () => {
    setIsRotate(updateRotate(''));
  };

  const onRotate = e => {
    const tag = e.currentTarget.name;
    if (isRotate[tag]) {
      setIsRotate(prevState => ({
        ...prevState,
        [tag]: false,
      }));
    } else {
      setIsRotate(updateRotate(tag));
    }
  };

  // SportsType
  const [selected, setSelected] = useState('');

  const handleSports = e => {
    e.preventDefault();
    if (e.currentTarget.id === 'etc_input') {
      setSelected('etc');
      if (e.currentTarget.value !== '') {
        setIsValidate({ ...isValidate, isSportsValidate: true });
      } else {
        setIsValidate({ ...isValidate, isSportsValidate: false });
      }
      return;
    }
    setSelected(e.currentTarget.id);
    if (e.currentTarget.id === 'etc') return;
    else setIsValidate({ ...isValidate, isSportsValidate: true });
  };

  // Contact
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const onOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const [getContact, setGetContact] = useState('');
  const getContactHandler = e => {
    const contact = e.target.value;
    setGetContact(contact);
    setIsValidate(prevState => ({
      ...prevState,
      isContactValidate: contact.length ? true : false,
    }));
  };

  return (
    <styled.MatchMakeContainer>
      <GlobalStyleMatchMake />
      {/* Title */}
      <styled.Text marginTop="60px">제목</styled.Text>
      <styled.GetInform
        marginTop="20px"
        value={matchTitle}
        onChange={matchTitleHandler}
        maxLength="15"
        placeholder="최대 15자 이내의 제목을 입력해주세요."
      />

      {/* Date */}

      <styled.Text marginTop="60px">시간</styled.Text>
      <styled.ReferText>
        ※ 매칭 지원은 모임 시간 24시간 전에 자동으로 마감됩니다.
      </styled.ReferText>
      <styled.DateBox>
        <styled.CalendarCheck />
        <styled.ReferText marginLeft="16px" marginTop="0px">
          시작일
        </styled.ReferText>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
        <styled.CalendarCheck marginLeft="80px" />
        <styled.ReferText marginLeft="16px" marginTop="0px">
          종료일
        </styled.ReferText>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </styled.DateBox>

      <styled.Horizon marginTop="40px" />
      <styled.TimeBox>
        <styled.Watch />
        <styled.TimeText>17 : 00</styled.TimeText>
      </styled.TimeBox>
      <styled.TimeGetBox>
        <styled.TimeGet>
          <styled.TimeGetTime
            placeholder="17"
            onChange={onHourHandler}
            value={hour}
            maxLength={2}
          />
          <styled.Colon>:</styled.Colon>
          <styled.TimeGetTime
            placeholder="00"
            direction="right"
            onChange={onMinuteHandler}
            value={minute}
            maxLength={2}
          />
        </styled.TimeGet>
        <styled.ReferText marginLeft="14px">
          ※ 약속 시간을 입력해주세요.
        </styled.ReferText>
      </styled.TimeGetBox>

      {/* Location */}

      {/* <Location /> */}
      <styled.LocationTopBox>
        <styled.TopLeft>
          <styled.Text>매칭 장소</styled.Text>
          <styled.PlaceInform>
            <styled.Place />
            <styled.PlaceText>OO구 OO동 OO공원</styled.PlaceText>
          </styled.PlaceInform>
          <styled.PlaceAddress>주소(지도 상의 주소)</styled.PlaceAddress>
          <styled.LocationGetBox>
            <styled.GetInform
              placeholder="주소를 검색해주세요. (ex. 지번(신대방동), 도로명(신대방길))"
              width="515px"
              value={getLocation}
              onChange={getLocationHandler}
            />
            <styled.SearchBtn>검색</styled.SearchBtn>
            <styled.ClearBtn>
              <styled.Clear onClick={clearGetLocation} />
            </styled.ClearBtn>
          </styled.LocationGetBox>
        </styled.TopLeft>
        <styled.Map />
      </styled.LocationTopBox>
      <styled.Horizon marginTop="40px" />

      {/* Cost */}
      <styled.ExpectedCost>
        <styled.Text>예상 비용</styled.Text>
        <styled.NoCost>※ 비용없음</styled.NoCost>
        <styled.CheckBox
          margin="12px 0 0 9px"
          onClick={onCheck}
          backColor={isNoCost ? '#FB1E53' : 'transparent'}
        >
          {' '}
          <styled.OnCheck />{' '}
        </styled.CheckBox>
      </styled.ExpectedCost>
      <styled.GetInform
        placeholder="예상되는 비용을 입력해주세요. (ex. 입장료, 대여비, ...)"
        marginTop="20px"
        disabled={isNoCost}
        onChange={getCostHandler}
        value={getCost}
      />

      {/* Condition */}
      <styled.Text marginTop="80px">매칭 조건 설정</styled.Text>
      <styled.OptionBox>
        <styled.Option>
          <styled.OptionText>인원</styled.OptionText>
          <styled.OptionInfo>모집 인원을 설정해주세요.</styled.OptionInfo>
        </styled.Option>
        <styled.GetMember>
          <styled.Btn onClick={onDecMember}>
            <img src={minus} />
          </styled.Btn>
          <styled.NumMember>{numMember}</styled.NumMember>
          <styled.Btn onClick={onIncMember}>
            <img src={plus} />
          </styled.Btn>
        </styled.GetMember>
      </styled.OptionBox>
      <styled.Horizon />
      <styled.OptionBox>
        <styled.Option>
          <styled.OptionText>동네</styled.OptionText>
          <styled.OptionInfo>
            매칭글을 보여줄 동네를 선택해주세요.
          </styled.OptionInfo>
        </styled.Option>
        <styled.OptionBtn onClick={onRotate} name="town">
          {town}
          {isRotate['town'] ? <styled.RotatedArrow /> : <styled.Arrow />}
        </styled.OptionBtn>
        {isRotate['town'] && (
          <styled.OptionDropDown>
            {townList.map(item => (
              <styled.SelectOption value={item} key={item} onClick={handleTown}>
                {item}
              </styled.SelectOption>
            ))}
          </styled.OptionDropDown>
        )}
      </styled.OptionBox>
      <styled.Horizon />

      <styled.OptionBox>
        <styled.Option>
          <styled.OptionText>성별</styled.OptionText>
          <styled.OptionInfo>
            매칭을 원하는 성별을 선택해주세요.
          </styled.OptionInfo>
        </styled.Option>
        <styled.OptionBtn onClick={onRotate} name="sex">
          {sex}
          {isRotate['sex'] ? <styled.RotatedArrow /> : <styled.Arrow />}
        </styled.OptionBtn>
        {isRotate['sex'] && (
          <styled.OptionDropDown>
            {sexList.map(item => (
              <styled.SelectOption value={item} key={item} onClick={handleSex}>
                {item}
              </styled.SelectOption>
            ))}
          </styled.OptionDropDown>
        )}
      </styled.OptionBox>
      <styled.Horizon />

      <styled.OptionBox marginBot="0">
        <styled.Option>
          <styled.OptionText>레벨</styled.OptionText>
          <styled.OptionInfo>
            매칭을 원하는 운동 레벨을 선택해주세요.
          </styled.OptionInfo>
        </styled.Option>
        <styled.OptionBtn onClick={onRotate} name="level">
          {level}
          {isRotate['level'] ? <styled.RotatedArrow /> : <styled.Arrow />}
        </styled.OptionBtn>
        {isRotate['level'] && (
          <styled.OptionDropDown>
            {levelList.map(item => (
              <styled.SelectOption
                value={item}
                key={item}
                onClick={handleLevel}
              >
                {item}
              </styled.SelectOption>
            ))}
          </styled.OptionDropDown>
        )}
      </styled.OptionBox>

      {/* SportsType */}
      <styled.Text marginTop="80px">스포츠 종목</styled.Text>
      <styled.sportsBox>
        <styled.SportSelect
          id="basketball"
          select={selected === 'basketball'}
          onClick={handleSports}
        >
          <img src={Basketball} />
          <span>농구</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="football"
          select={selected === 'football'}
          onClick={handleSports}
        >
          <img src={Football} />
          <span>축구</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="baseball"
          select={selected === 'baseball'}
          onClick={handleSports}
        >
          <img src={Baseball} />
          <span>야구</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="volleyball"
          select={selected === 'volleyball'}
          onClick={handleSports}
        >
          <img src={Volleyball} />
          <span>배구</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="afootball"
          select={selected === 'afootball'}
          onClick={handleSports}
        >
          <img src={AFootball} />
          <span>미식축구</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="tennis"
          select={selected === 'tennis'}
          onClick={handleSports}
        >
          <img src={Tennis} />
          <span>테니스</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="badminton"
          select={selected === 'badminton'}
          onClick={handleSports}
        >
          <img src={Badminton} />
          <span>배드민턴</span>
        </styled.SportSelect>
        <styled.SportSelect
          id="etc"
          select={selected === 'etc'}
          onClick={handleSports}
        >
          <img src={Etc} />
          <span>기타</span>
        </styled.SportSelect>
      </styled.sportsBox>
      <styled.GetInform
        placeholder="제시된 아이콘 이외의 종목을 원하실 경우 해당 칸에 입력해 주세요."
        marginTop="30px"
        id="etc_input"
        disabled={selected !== 'etc'}
        onChange={handleSports}
      />

      {/* Contact */}
      <styled.Text marginTop="80px">연락 수단 및 프로필 공개</styled.Text>
      <styled.ReferText>
        ※ 매칭 전 문의사항, 매칭 이후 팀원과의 연락 등은 카카오톡 오픈채팅으로
        이루어집니다.
      </styled.ReferText>
      <styled.GetInform
        placeholder="복사한 카카오톡 오픈채팅방 링크를 붙여넣기 해주세요."
        marginTop="20px"
        value={getContact}
        onChange={getContactHandler}
      />
      <styled.WarningText>
        ※ 오픈채팅방 링크 형식을 확인해주세요.
      </styled.WarningText>
      <styled.Horizon />
      <styled.OpenProfile>
        <styled.spanText>프로필 공개하기</styled.spanText>
        <styled.CheckBox
          margin="1px 0 0 18px"
          onClick={onOpenProfile}
          backColor={isOpenProfile ? '#FB1E53' : 'transparent'}
        >
          {' '}
          <styled.OnCheck />{' '}
        </styled.CheckBox>
      </styled.OpenProfile>

      <styled.ReferText>
        ※ 매칭 글에 호스트인 OO님의 운동 정보가 담긴 프로필이 올라가면 매칭률이
        더 높아질 수 있어요.
      </styled.ReferText>

      {/* RegisterBtn */}
      <styled.MatchingRegister>
        <styled.ResisterBtn
          color={
            isValidate['isTitleValidate'] &&
            isValidate['isHourValidate'] &&
            isValidate['isMinuteValidate'] &&
            isValidate['isLocationValidate'] &&
            (isValidate['isNoCostChecked'] || isValidate['isCostValidate']) &&
            isValidate['isSportsValidate'] &&
            isValidate['isContactValidate'] &&
            startDate &&
            endDate
              ? '#FB1E53'
              : '#D3D3D3'
          }
          onClick={
            isValidate['isTitleValidate'] &&
            isValidate['isHourValidate'] &&
            isValidate['isMinuteValidate'] &&
            isValidate['isLocationValidate'] &&
            (isValidate['isNoCostChecked'] || isValidate['isCostValidate']) &&
            isValidate['isSportsValidate'] &&
            isValidate['isContactValidate'] &&
            startDate &&
            endDate
              ? () => {
                  navigator('/matching/detail');
                }
              : () => alert('정보를 모두 입력해주세요!')
          }
        >
          매칭 글 등록하기
        </styled.ResisterBtn>
      </styled.MatchingRegister>
    </styled.MatchMakeContainer>
  );
};
export default MatchMake;

// 56*100/1920
