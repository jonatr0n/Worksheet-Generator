var slopeInterceptRouter = require('./routes/slopeIntercept');
var worsheetHistory = require('./routes/worksheetHistory');
var Users = require('./routes/Users');

app.use('/users', Users);
app.use('/slope_intercept', slopeInterceptRouter);
app.use('/worksheets', worsheetHistory);
