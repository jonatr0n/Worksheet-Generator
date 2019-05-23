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
          if (m > 0 && y >= 0) {
            equation.push([`-${m}x = ${b} - ${y}`, max, min, x, 'x = ' + x]);
          } else if (m <= 0 && y >= 0) {
            abs_m = Math.abs(m);
            equation.push([`${abs_m}x = ${b} - ${y}`, max, min, x, 'x = ' + x]);
          } else if (m > 0 && y < 0) {
            abs_y = Math.abs(y);
            equation.push([
              `-${m}x = ${b} + ${abs_y}`,
              max,
              min,
              x,
              'x = ' + x
            ]);
          } else {
            abs_m = Math.abs(m);
            abs_y = Math.abs(y);
            equation.push([
              `${abs_m}x = ${b} + ${abs_y}`,
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
