'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const requestProxy = require('express-request-proxy');
app.use(express.static('./public'));

app.get('/github/*', proxyGitHub);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

function proxyGitHub(request, response) {
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
