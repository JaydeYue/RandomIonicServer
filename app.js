var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.listen(port);

const randomFunctionalities = require('./routes/randomFunctionalities');

app.get('/', function(req, res) {
    res.send("Routes supported: get /get_median_prime with a header of n_value");
});

app.get('/get_median_prime/:n_value', randomFunctionalities.getMedianPrimes);

port = process.env.PORT || 8080
