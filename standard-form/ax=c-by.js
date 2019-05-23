const slopeIntercept = (min_size, max_size) => {
  equation = [];

  for (a = min_size; a <= max_size; a++) {
    for (x = min_size; x < max_size; x++) {
      for (b = min_size; b < max_size; b++) {
        for (y = min_size; y < max_size; y++) {

          c = a * x + b * y;
          
          if (c % 1 === 0 && c <= max_size && c >= min_size) {
            let max = Math.max(a, x, b, y, c);
            let min = Math.min(a, x, b, y, c);
            if (b < 0) {
              oppob = Math.abs(b);
            } else {
              oppob = -Math.abs(b);
            }
            if (c < 0) {
              abs_c = Math.abs(c);
              equation.push([
                `${a}(x) = ${oppob}(${y}) - ${abs_c}`,

                'x = ' + x,
                max,
                min
              ]);
            } else {
              equation.push([
                `${a}(x) = ${oppob}(${y}) + ${c}`,
                'x = ' + x,
                max,
                min
              ]);

            }
          }
          //test a, x, b, y,c
         // console.log("(c = a * x + b * y)", c, "=", a, "+", x, "*", b, "+", y);
        }
      }
    }
  }


  return equation;

};

module.exports = slopeIntercept(-50, 50);
