import React, { useEffect, useState } from 'react';
import * as styled from './styles';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <styled.Nav>
        <styled.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </styled.Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <styled.Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </styled.Button>
          ))}
        <styled.Button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </styled.Button>
      </styled.Nav>
    </>
  );
};

const FilterDrop = props => {
  const genderList = ['성별', '여자만', '남자만', '둘다'];
  const levelList = ['레벨', '상', '중', '하'];
  const [Selected, setSelected] = useState('');

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  return (
    <styled.FilterDropContainer onChange={handleSelect} value={Selected}>
      {props.id === 'gender'
        ? genderList.map(item => (
            <styled.FilterDropObtions value={item} key={item}>
              {item}
            </styled.FilterDropObtions>
          ))
        : levelList.map(item => (
            <styled.FilterDropObtions value={item} key={item}>
              {item}
            </styled.FilterDropObtions>
          ))}
    </styled.FilterDropContainer>
  );
};

const MatchList = () => {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const navigator = useNavigate();

  const onClick = e => {
    setCurrentClick(e.target.id);
  };

  useEffect(
    e => {
      if (currentClick !== null) {
        const current = document.getElementById(currentClick);
        current.style.background = '#fb1e53';
        current.style.color = '#ffffff';
        current.style.border = '0';
      }

      if (prevClick !== null) {
        const prev = document.getElementById(prevClick);
        prev.style.background = '#ffffff';
        prev.style.color = '#d3d3d3';
        prev.style.border = '0.1vw solid #d3d3d3';
      }
      setPrevClick(currentClick);
    },
    [currentClick],
  );

  return (
    <styled.Container>
      <styled.MatchListText>
        주변 동네 보기 <styled.MatchListImg />
      </styled.MatchListText>
      <styled.LocationContainer>
        <styled.Locations onClick={onClick} id="1">
          서초1동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="2">
          서초2동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="3">
          서초3동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="4">
          서초4동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="5">
          반포1동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="6">
          반포4동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="7">
          방배1동
        </styled.Locations>
        <styled.Locations onClick={onClick} id="8">
          방배3동
        </styled.Locations>
      </styled.LocationContainer>
      <styled.FilterContainer>
        <styled.FilterImg />
        <styled.Filters>거리순</styled.Filters>
        <styled.Filters>시간순</styled.Filters>
        <FilterDrop id="gender" />
        <FilterDrop id="level" />
        <styled.Filters>마감제외</styled.Filters>
      </styled.FilterContainer>
      <styled.MatchListContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key => (
          <styled.MatchLists
            onClick={() => {
              navigator('/matching/detail');
            }}
            key={key}
          >
            <styled.MatchName>모임 이름</styled.MatchName>
            <styled.MatchDate>07.08/17:00</styled.MatchDate>
            <styled.MatchPlace>모임 장소</styled.MatchPlace>
            <styled.MatchStatus>
              <styled.MatchIcon />
              <styled.MatchNumber>인원 (1/5)</styled.MatchNumber>
            </styled.MatchStatus>
          </styled.MatchLists>
        ))}
      </styled.MatchListContainer>
      <Pagination total={30} limit={9} page={page} setPage={setPage} />
    </styled.Container>
  );
};

export default MatchList;
