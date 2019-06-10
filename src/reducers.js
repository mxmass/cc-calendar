import moment from 'moment';

const feed = require('./calendar.json').sort((a,b)=>{
  var c = new Date(a.dateTime);
  var d = new Date(b.dateTime);
  return c-d;
});

let datesList = [...new Set(
  feed.map(i =>
    moment(i.dateTime).format('YYYY-MM-DD')
  )
)].sort();

export default function itemsReducer(state = {
  items: feed,
  dates: datesList,
  instructor: 'all',
  eventtype: 'all'
}, action) {
  switch (action.type) {
    case 'SET_INSTRUCTOR':
      return {
        ...state,
        instructor: action.instructor,
      };
    case 'SET_EVENTTYPE':
      return {
        ...state,
        eventtype: action.eventtype,
      };
    default:
      return state;
  }
}
