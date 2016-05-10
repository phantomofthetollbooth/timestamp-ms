var express = require('express');
var path = require('path');
var moment = require('moment');

var app = express();


app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});


app.get("/:date", function(req, res) {
    var date = moment(req.params.date);
    if(date.isValid()){
        var output = {
            unix:date.unix(),
            natural:date.format('MMMM DD, YYYY')
        };
    }else{
        output = {
            unix:null,
            natural:null
        };
    }
  res.json(output);
  
});

app.listen(app.get('port'));