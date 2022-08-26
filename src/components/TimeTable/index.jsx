import React, { useEffect, useState } from 'react';
import * as styles from './styles';

export default function TimeTable(props) {
  const leftSize = {
    Mon: '54px',
    Tue: '136px',
    Wed: '218px',
    Thu: '300px',
    Fri: '381px',
    Sat: '462px',
    Sun: '546px',
  };
  useEffect(() => {
    if (props?.timeTable) setTimeTable(props.timeTable);
  }, [props.timeTable]);
  const [timeTable, setTimeTable] = useState({
    active: 'Mon',
    input: [17, 1],
    Mon: [[10, 3]],
    Tue: [[18, 3]],
    Wed: [[20, 3]],
    Thu: [[20, 3]],
    Fri: [[17, 6]],
    Sat: [[9, 5]],
    Sun: [[12, 5]],
  });
  return (
    <styles.TableContainer>
      <styles.DayLine>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
        <span>일</span>
      </styles.DayLine>
      <styles.TimeBlockWrapper>
        <styles.TimeWrapper>
          <span>8</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>10</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>12</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>14</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>16</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>18</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>20</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <span>22</span>
          <styles.TimeLine />
        </styles.TimeWrapper>
        <styles.TimeWrapper>
          <styles.TimeLine />
        </styles.TimeWrapper>
        {Object.keys(timeTable).map(key => {
          if (key === 'active') return;
          else if (key === 'input') {
            return (
              <styles.TimeBlock
                input={true}
                day={leftSize[timeTable.active]}
                start={(timeTable[key][0] - 8) * 20}
                size={timeTable[key][1] * 20}
                key={key}
              />
            );
          }
          return timeTable[key].map(time => {
            return (
              <styles.TimeBlock
                active={timeTable.active === key}
                start={(time[0] - 8) * 20}
                day={leftSize[key]}
                size={time[1] * 20}
                key={time}
              />
            );
          });
        })}
      </styles.TimeBlockWrapper>
    </styles.TableContainer>
  );
}
