import { connect } from 'react-redux';
import Filters from './Filters';

// return all filters from state by given key.
function getFilters(key, items) {
  return items.reduce((acc, item) => {
    if (!acc.includes(item[key])) {
      return [...acc, item[key]];
    }
    return acc;
  }, []);
}

function mapStateToProps(state, props) {
  const { instructor, eventtype } = state;
  return {
    selectedInstructor: instructor,
    selectedEventType: eventtype,
    instructors: getFilters('instructor', state.items).sort(),
    eventtypes: getFilters('eventType', state.items).sort()
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onInstructorChange(instructor) {
      dispatch({
        type: 'SET_INSTRUCTOR',
        instructor,
      });
    },
    onEventTypeChange(eventtype) {
      dispatch({
        type: 'SET_EVENTTYPE',
        eventtype,
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
