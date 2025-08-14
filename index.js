const express = require('express');
const app = express();

const indexRoutes = require('./routes/indexRoutes');

app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Example app listening on port http://localhost:3000');
});