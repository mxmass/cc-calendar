import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 15px 5px;
  width: 100%;
  display: flex;
  align-items: left;
  margin: 0 auto;
`
const Section = styled.div`
  text-align: left;
  margin-right: 15px;
`
const Select = styled.select`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  cursor: text;
  font-size: 0.85rem;
  text-transform: uppercase;
  background: white;
  min-width: 180px;
`
const Option = styled.option`
`

function Filters({
  selectedInstructor,
  selectedEventType,
  instructors = [],
  eventtypes = [],
  onInstructorChange,
  onEventTypeChange,
}) {
  return (
    <Wrapper>
      <Section>
        <Select
          name='instructors'
          defaultValue={selectedInstructor}
          onChange={e => onInstructorChange(e.target.value)}
        >
          <Option value='all'>All instructors</Option>
          {instructors.map((text, index) =>
            <Option key={index.toString()} value={text}>{text}</Option>
          )}
        </Select>
      </Section>
      <Section>
        <Select
          name='eventtypes'
          defaultValue={selectedEventType}
          onChange={e => onEventTypeChange(e.target.value)}
        >
          <Option value='all'>All class types</Option>
          {eventtypes.map((text, index) =>
            <Option key={index.toString()} value={text}>{text}</Option>
          )}
        </Select>
      </Section>
    </Wrapper>
  )
}

export default Filters;
