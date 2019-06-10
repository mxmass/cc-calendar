import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Tooltip from './Tooltip.js';

const Wrapper = styled.div`
  padding-top: ${props => props.offset}px;
  margin-bottom: -${props => props.offset}px;
`
const Container = styled.div`
  width: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 3px 0 5px 0;
  background-color: white;
  border-top: solid 1px #8aca80;
  border-bottom: solid 1px #8aca80;
  margin-top: -1px;
`
const FlexRow = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 0;
`
const LBox = styled.div`
  width: 50%;
  padding-left: 5px;
  text-align: left;
  font-size: 0.8rem;
`
const RBox = styled.div`
  width: 50%;
  padding-right: 5px;
  text-align: right;
  font-size: 0.8rem;
`
const Name = styled.div`
  width: 100%;
  text-align: center;
  color: #8aca80;
`
const Class = styled.div`
  width: 100%;
  text-align: center;
  color: #495156;
  font-size: 0.8rem;
  font-weight: bold;
`
const Button = styled.div`
  margin: 0 auto;
  padding: 3px 10px;
  text-align: center;
  background-color: #8aca80;
  border: 0;
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  position: relative;
  display: inline;
  cursor: pointer;
  &:focus {
    border: 0;
    & > span {
      border: 0;
    }
  }
  & > span {
    position: absolute;
    width:240px;
    color: #FFFFFF;
    background: #000000;
    height: 45px;
    line-height: 45px;
    text-align: center;
    visibility: hidden;
    border: 0;
    border-radius: 6px;
    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -8px;
      width: 0; height: 0;
      border-bottom: 8px solid #000000;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
  }
  &:hover {
    & > span {
      visibility: visible;
      opacity: 0.8;
      top: 30px;
      left: 50%;
      margin-left: -120px;
      z-index: 99999;
    }
  }
`

function Event (props) {
  return (
    <Wrapper offset={parseInt(moment.utc(props.params.dateTime).format('mm'))}>
      <Container>
        <FlexRow>
          <LBox>{moment.utc(props.params.dateTime).format('HH:mm')}</LBox>
          <RBox>{props.params.duration} min</RBox>
        </FlexRow>
        <FlexRow>
          <Name>{props.params.instructor}</Name>
        </FlexRow>
        <FlexRow>
          <Class>{props.params.eventType}</Class>
        </FlexRow>
        <FlexRow>
          <Button>
            book
            {props.params.bookable ? null : <span><Tooltip /></span> }
          </Button>
        </FlexRow>
      </Container>
    </Wrapper>
  )
}

export default Event;
