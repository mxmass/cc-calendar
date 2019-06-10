import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-transform: uppercase;
  border-top: solid 1px #dbdbdb;
  border-bottom: solid 1px #dbdbdb;
`
const LSection = styled.div`
  width: 50%;
  margin-left: 25%;
  text-align: center;
  font-size: 0.9rem;
`
const RSection = styled.div`
  width: 25%;
  text-align: right;
  padding-right: 5px;
  font-size: 0.7rem;
`

function WeekTitle (props) {
  let sDate = moment(props.dates[0]).format('DD MMM');
  let eDate = moment(props.dates.slice(-1)[0]).format('DD MMM');

  return (
    <Wrapper>
      <LSection>{sDate} &mdash; {eDate}</LSection>
      <RSection>Next week</RSection>
    </Wrapper>
  )
}

export default WeekTitle;
