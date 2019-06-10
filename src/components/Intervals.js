import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import EventWrapper from './EventWrapper.js';

const Wrapper = styled.div`
  margin: 0 0 30px 0;
`

function Interval (props) {
  return (
    <Wrapper>
      {props.hours.map((h, key) =>
        <EventWrapper key={key.toString()} data={
          props.data.filter(
            item => moment.utc(item.dateTime).format('HH') === h.toString()
          )}
        ></EventWrapper>
      )}
    </Wrapper>
  )
}

export default Interval;
