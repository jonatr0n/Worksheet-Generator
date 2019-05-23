//Done
const slopeIntercept = (min_size, max_size) => {
  equation = [];

  for (a = min_size; a <= max_size; a++) {
    for (x = min_size; x <= max_size; x++) {
      for (b = min_size; b <= max_size; b++) {
        for (y = min_size; y <= max_size; y++) {
          
          c = a * x + b * y;

          if (c % 1 === 0 && c <= max_size && c >= min_size) {
            let max = Math.max(a, x, b, y, c);
            let min = Math.min(a, x, b, y, c);
            if (b < 0) {
              abs_b = Math.abs(b);

              equation.push([
                `${a}(x) - ${abs_b}(${y}) = ${c}`,
                'x = ' + x,
                max,
                min
              ]);
            } else {
              equation.push([
                `${a}(x) + ${b}(${y}) = ${c}`,
                'x = ' + x,
                max,
                min
              ]);

            }
          }
        //console log test - c = a * x + b * y
        //console.log("(c = a * x + b * y)", c, "=", a, "+", x, "*", b, "+", y);
        }

      }
    }
  }


  return equation;

};
slopeIntercept(1, 10);

module.exports = slopeIntercept(-50, 50);
