var fs = require('fs');

const slopeInterceptBoth = [];
const generateSlopeInterceptBoth = (minNum, maxNum) => {
  for (let i = minNum; i <= maxNum; i++) {
    slopeInterceptBoth.push(
      `
      
      CREATE TABLE \`slope_intercept_both_${i}\` (
                \`id\` bigint(60) NOT NULL AUTO_INCREMENT,
                \`question\` varchar(50) NOT NULL,
                \`max\` integer(10) NOT NULL,
                \`min\` integer(10) NOT NUll,
                \`answer\` varchar(40) NOT NULL,
                PRIMARY KEY (\`id\`)
                );`
    );
  }
};
generateSlopeInterceptBoth(-50, 50);

const slopeInterceptBothString = slopeInterceptBoth.join(' ');
fs.writeFile('schema.sql', slopeInterceptBothString, err => {
  if (err) console.log(err);
  console.log('Successfully Written to File.');
});
