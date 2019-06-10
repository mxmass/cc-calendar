import { connect } from 'react-redux';
import WeekGrid from './WeekGrid';

function getVisibleItems(instructor, eventtype, items) {
  return items
    .filter(m => {
      return (
        (instructor === 'all' || instructor === m.instructor) &&
        (eventtype === 'all' || eventtype === m.eventType)
      );
    });
}

function mapStateToProps(state) {
  // eslint-disable-next-line
  const { instructor, eventtype, dates, items } = state;
  return {
    items: getVisibleItems(instructor, eventtype, items),
    dates: state.dates
  };
}

export default connect(mapStateToProps)(WeekGrid);
