import React from 'react';
import styled from 'styled-components';
import Event from './Event.js';

const Spacer = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
`

function EventWrapper (props) {

  if(props.data[0] !== undefined) {
    return (
      <Event params={props.data[0]}></Event>
    )
  } else {
    return (
      <Spacer></Spacer>
    )
  }
}

export default EventWrapper;
