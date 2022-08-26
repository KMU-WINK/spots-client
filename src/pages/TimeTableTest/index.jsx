import React from 'react';
import TimeTable from '../../components/TimeTable';
import Chart from '../../components/Chart';

export default function TimeTableTest() {
  return (
    <div style={{ width: '990px' }}>
      <TimeTable />
      <Chart data={{ mCount: 10, wCount: 11 }} />
    </div>
  );
}
