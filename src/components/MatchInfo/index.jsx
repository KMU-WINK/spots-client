import React, { useState } from 'react';
import * as styled from './styles';
import TimeTable from '../TimeTable';
import Chart from '../Chart';

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

const MatchInfo = () => {
  const [page, setPage] = useState(1);
  const [openStatus, setOpenStatus] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [innerOpenStatus, setInnerOpenStatus] = useState({
    1: {
      1: [false, null],
      2: [false, null],
      3: [false, null],
      4: [false, null],
      5: [false, null],
      6: [false, null],
      7: [false, null],
      8: [false, null],
      more: false,
    },
    2: {
      1: [false, null],
      2: [false, null],
      3: [false, null],
      4: [false, null],
      5: [false, null],
      6: [false, null],
      7: [false, null],
      8: [false, null],
      more: false,
    },
    3: {
      1: [false, null],
      2: [false, null],
      3: [false, null],
      4: [false, null],
      5: [false, null],
      6: [false, null],
      7: [false, null],
      8: [false, null],
      more: false,
    },
    4: {
      1: [false, null],
      2: [false, null],
      3: [false, null],
      4: [false, null],
      5: [false, null],
      6: [false, null],
      7: [false, null],
      8: [false, null],
      more: false,
    },
    5: {
      1: [false, null],
      2: [false, null],
      3: [false, null],
      4: [false, null],
      5: [false, null],
      6: [false, null],
      7: [false, null],
      8: [false, null],
      more: false,
    },
  });

  const openHandler = e => {
    setOpenStatus({
      ...openStatus,
      [e.target.name]: !openStatus[e.target.name],
    });
  };

  const innerOpenHandler = e => {
    setInnerOpenStatus({
      ...innerOpenStatus,
      [e.target.id]: {
        ...innerOpenStatus[e.target.id],
        [e.target.name]: [
          !innerOpenStatus[e.target.id][e.target.name][0],
          innerOpenStatus[e.target.id][e.target.name][1],
        ],
      },
    });
  };

  const acceptOrDenyHandler = (status, e) => {
    setInnerOpenStatus({
      ...innerOpenStatus,
      [e.target.id]: {
        ...innerOpenStatus[e.target.id],
        [e.target.name]: [
          innerOpenStatus[e.target.id][e.target.name][0],
          status === 'accept',
        ],
      },
    });
  };

  const OpenInfo = props => {
    return (
      <>
        <styled.MatchingTitle>매칭 지원자</styled.MatchingTitle>
        <styled.InnerDiv1>
          <styled.InnerDiv1Left>
            <div>
              <styled.MatchingCount>
                <span>8</span>
                <span>명이 지원했어요.</span>
              </styled.MatchingCount>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <styled.ProgressBarWrap>
                  <styled.InnerDivLevel width={'70%'}>
                    <div></div>
                    <div></div>
                  </styled.InnerDivLevel>
                  <span>지원자의 평균 레벨 : 중상</span>
                </styled.ProgressBarWrap>
                <styled.ProgressBarWrap>
                  <styled.InnerDivLevel width={'25%'}>
                    <div></div>
                    <div></div>
                  </styled.InnerDivLevel>
                  <span>지원자의 평균 연령 : 20대 초반</span>
                </styled.ProgressBarWrap>
              </div>
            </div>
            <Chart />
          </styled.InnerDiv1Left>
        </styled.InnerDiv1>
        <styled.ApplicantWrap>
          <div>
            {[1, 2, 3, 4, 5].map(num => {
              return (
                <styled.ApplicantList key={num}>
                  <styled.InnerToggle
                    open={innerOpenStatus[props.listNum][num][0]}
                  >
                    <div>
                      <span>지원자이름{num}</span>
                      <span>여</span>
                      <span>하</span>
                      <span>서초 1동</span>
                      <styled.InnerToggleBtn
                        id={props.listNum}
                        name={num}
                        onClick={innerOpenHandler}
                        open={innerOpenStatus[props.listNum][num][0]}
                      />
                    </div>
                    {innerOpenStatus[props.listNum][num][0] && (
                      <styled.ApplicantInfo>
                        <h3>지원자 시간표</h3>
                        <TimeTable />
                        <h3>지원자가 받은 평가</h3>
                        <div>
                          <span>
                            평가 서비스는 추후 업데이트 될 계획이에요!
                          </span>
                        </div>
                      </styled.ApplicantInfo>
                    )}
                  </styled.InnerToggle>
                  <styled.buttons
                    active={innerOpenStatus[props.listNum][num][1]}
                  >
                    {innerOpenStatus[props.listNum][num][1] === null ? (
                      <>
                        <button
                          id={props.listNum}
                          name={num}
                          onClick={e => {
                            acceptOrDenyHandler('accept', e);
                          }}
                        >
                          승인
                        </button>
                        <button
                          id={props.listNum}
                          name={num}
                          onClick={e => {
                            acceptOrDenyHandler('deny', e);
                          }}
                        >
                          거절
                        </button>
                      </>
                    ) : (
                      <div>
                        {innerOpenStatus[props.listNum][num][1]
                          ? '승인됨'
                          : '거절됨'}
                      </div>
                    )}
                  </styled.buttons>
                </styled.ApplicantList>
              );
            })}
            {innerOpenStatus[props.listNum]['more'] &&
              [6, 7, 8].map(num => {
                return (
                  <styled.ApplicantList key={num}>
                    <styled.InnerToggle
                      open={innerOpenStatus[props.listNum][num][0]}
                    >
                      <div>
                        <span>지원자이름{num}</span>
                        <span>여</span>
                        <span>하</span>
                        <span>서초 1동</span>
                        <styled.InnerToggleBtn
                          id={props.listNum}
                          name={num}
                          onClick={innerOpenHandler}
                        />
                      </div>
                      {innerOpenStatus[props.listNum][num][0] && (
                        <styled.ApplicantInfo>
                          <h3>지원자 시간표</h3>
                          <TimeTable />
                          <h3>지원자가 받은 평가</h3>
                          <div>
                            <span>
                              평가 서비스는 추후 업데이트 될 계획이에요!
                            </span>
                          </div>
                        </styled.ApplicantInfo>
                      )}
                    </styled.InnerToggle>
                    <styled.buttons
                      active={innerOpenStatus[props.listNum][num][1]}
                    >
                      {innerOpenStatus[props.listNum][num][1] === null ? (
                        <>
                          <button
                            id={props.listNum}
                            name={num}
                            onClick={e => {
                              acceptOrDenyHandler('accept', e);
                            }}
                          >
                            승인
                          </button>
                          <button
                            id={props.listNum}
                            name={num}
                            onClick={e => {
                              acceptOrDenyHandler('deny', e);
                            }}
                          >
                            거절
                          </button>
                        </>
                      ) : (
                        <div>
                          {innerOpenStatus[props.listNum][num][1]
                            ? '승인됨'
                            : '거절됨'}
                        </div>
                      )}
                    </styled.buttons>
                  </styled.ApplicantList>
                );
              })}
          </div>
          {!innerOpenStatus[props.listNum]['more'] && (
            <styled.moreApplicant
              onClick={() => {
                setInnerOpenStatus({
                  ...innerOpenStatus,
                  [props.listNum]: {
                    ...innerOpenStatus[props.listNum],
                    more: true,
                  },
                });
              }}
            >
              지원자 더보기
            </styled.moreApplicant>
          )}
        </styled.ApplicantWrap>
      </>
    );
  };

  return (
    <styled.Container>
      <styled.MatchDiv open={openStatus['1']}>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>모집중</span>
          <styled.Toggle
            name="1"
            onClick={openHandler}
            open={openStatus['1']}
          />
        </styled.TextDiv>
        {openStatus['1'] && <OpenInfo listNum={1} />}
      </styled.MatchDiv>

      <styled.MatchDiv open={openStatus['2']}>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>모집중</span>
          <styled.Toggle
            name="2"
            onClick={openHandler}
            open={openStatus['2']}
          />
        </styled.TextDiv>
        {openStatus['2'] && <OpenInfo listNum={2} />}
      </styled.MatchDiv>

      <styled.MatchDiv open={openStatus['3']}>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭확정</span>
          <styled.Toggle
            name="3"
            onClick={openHandler}
            open={openStatus['3']}
          />
        </styled.TextDiv>
        {openStatus['3'] && <OpenInfo listNum={3} />}
      </styled.MatchDiv>

      <styled.MatchDiv open={openStatus['4']}>
        <styled.TextDiv>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭확정</span>
          <styled.Toggle
            name="4"
            onClick={openHandler}
            open={openStatus['4']}
          />
        </styled.TextDiv>
        {openStatus['4'] && <OpenInfo listNum={4} />}
      </styled.MatchDiv>

      <styled.MatchDiv open={openStatus['5']}>
        <styled.TextDiv color={'#858585'}>
          <span>모임 이름</span>
          <span>07.08 / 17:00</span>
          <span>모임 장소</span>
          <styled.UserIcon />
          <span>인원 (5/5)</span>
          <span>매칭취소</span>
          <styled.Toggle
            name="5"
            onClick={openHandler}
            open={openStatus['5']}
          />
        </styled.TextDiv>
        {openStatus['5'] && <OpenInfo listNum={5} />}
      </styled.MatchDiv>
      <Pagination total={30} limit={9} page={page} setPage={setPage} />
    </styled.Container>
  );
};

export default MatchInfo;
