var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

var app_path = '../dist/logisticProject';
const http = require('http');

app.use('/', express.static(path.join(__dirname, app_path)))
.get('*', (req, res)=> res.sendfile(path.join(__dirname, app_path +'/index.html')));

const server = http.createServer(app);

server.listen(PORT,() => console.log('RUNNING...'));
