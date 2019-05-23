//Done
const slopeIntercept = (min_size, max_size) => {
  equation = [];
  m = min_size;
  b = min_size;
  x = min_size;
  y = m * x + b;
  while (m <= max_size) {
    while (x <= max_size) {
      while (b <= max_size) {
        y = m * x + b;
        if (y % 1 === 0 && y <= max_size && y >= min_size && m !== 0) {
          let max = Math.max(y, m, b, x, y);
          let min = Math.min(y, m, b, x, y);
          if (y >= 0) {
            if (b < 0) {
              oppob = Math.abs(b);
            } else {
              oppob = -Math.abs(b);
            }
            equation.push([`${oppob} + ${y} = ${m}x`, max, min, x, 'x = ' + x]);
          } else {
            if (b < 0) {
              oppob = Math.abs(b);
            } else {
              oppob = -Math.abs(b);
            }

            abs_y = Math.abs(y);
            equation.push([
              `${oppob} - ${abs_y} = ${m}x`,
              max,
              min,
              x,
              'x = ' + x
            ]);
          }
        }
        b++;
      }
      b = min_size;
      x++;
    }
    x = min_size;
    b = min_size;
    m++;
  }
  return equation;
};

module.exports = slopeIntercept;
