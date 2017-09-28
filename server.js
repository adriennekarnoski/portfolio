'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
