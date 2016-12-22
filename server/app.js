const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var getsongs = require('./routes/getsongs');
var getsong = require('./routes/getsong');
var addsong = require('./routes/addsong');
var findsong = require('./routes/findsong');
var deletesong = require('./routes/deletesong');
var updatesong = require('./routes/updatesong');
var uploadimage = require('./routes/uploadimage');
var songcount = require('./routes/songcount');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded());

app.use('/getsongs', getsongs);
app.use('/getsong', getsong);
app.use('/addsong', addsong);
app.use('/deletesong', deletesong);
app.use('/findsong', findsong);
app.use('/updatesong', updatesong);
app.use('/uploadimage', uploadimage);
app.use('/songcount', songcount);

module.exports = app;
