function mergeIntervals(intervals) {
  if(intervals.length <= 1)
    return intervals;

  intervals = intervals.sort();
  var stack = [];
  stack.push(intervals[0]);
  var top   = null;

  for (var i = 1; i < intervals.length; i++)
  {
    top = stack[stack.length - 1];

    if (top[1] < intervals[i][0])
    {
      stack.push(intervals[i]);
    }
    else if (top[1] < intervals[i][1])
    {
      top[1] = intervals[i][1];
    }
  }

  return stack;
}

export default mergeIntervals
