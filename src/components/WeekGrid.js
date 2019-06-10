import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import mergeIntervals from '../helpers';
import WeekTitle from './WeekTitle.js';
import Day from './Day.js';

const Wrapper = styled.div`
  width: 100%;
  align-items: left;
`
const Days = styled.div`
  display: flex;
`

function WeekGrid ({dates, items}) {
  let intervals = mergeIntervals(
    [...new Set(
      items.map(
        i => [
          moment.utc(i.dateTime).format('HH'),
          moment.utc(i.dateTime).add(1, 'hours').format('HH')
        ]
      )
    )]
  )
  let busyHours = []
  intervals.forEach((a, b) => {
    let hours = []
    for (let k=parseInt(a[0]); k<parseInt(a[1]); k++) {
      hours.push(k<10 ? '0'+k : k.toString())
    }
    busyHours.push(hours)
  })

  return (
    <Wrapper>
      <WeekTitle dates={dates}></WeekTitle>
      <Days>
        {dates.map((date, key) =>
          <Day
            key={key.toString()}
            date={date}
            hours={busyHours}
            data={
              items.filter(
                item => moment(item.dateTime).format('YYYY-MM-DD') === date
              )
            }
          >
          </Day>
        )}
      </Days>
      <WeekTitle dates={dates}></WeekTitle>
    </Wrapper>
  )
}

export default WeekGrid;
