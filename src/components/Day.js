import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Intervals from './Intervals.js';

const Wrapper = styled.div`
  width: 14%;
  margin: 0.7%;
  display: flex;
`
const Day = styled.div`
  width: 100%;
  background-color: #f4f5f6;
  color: #495156;
`
const TWrapper = styled.div`
  border: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  background-color: #495156;
  color: white;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 7px 0;
`
const Reminders = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  z-index: 101;
`

function WeekGrid (props) {
  return (
    <Wrapper>
      <Day>
        <TWrapper>
          <Title>{moment(props.date).format('ddd DD.M')}</Title>
        </TWrapper>
        <Reminders>
          {props.hours.map((h, key) =>
            <Intervals key={key.toString()} hours={h} data={props.data}></Intervals>
          )}
        </Reminders>
      </Day>
    </Wrapper>
  )
}

export default WeekGrid;
