import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TimeLine = styled.div`
  width: 600px;
  height: 1px;
  background: #d3d3d3;
`;

export const DayLine = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  > span {
    margin: 0 34px;
  }
`;

export const TimeWrapper = styled.div`
  width: 630px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  > span {
    font-size: 16px;
  }
`;

export const TimeBlock = styled.div`
  width: 58px;
  height: ${props => `${props.size}px` || '0'};
  position: absolute;
  top: ${props => props?.start && `calc(${props.start}px + 10px)`};
  left: ${props => props.day || '0'};
  background: ${props =>
    props?.active ? '#fb1e53' : props?.input ? '#d3d3d3' : '#858585'};
  border-radius: 5px;
`;

export const TimeBlockWrapper = styled.div`
  position: relative;
`;
