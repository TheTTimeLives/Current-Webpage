const express = require('express');
const path = require('path');



var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
// app.use(express.static("public"));

require('./controller/routes/routes.js')(app);

    app.listen(PORT, function (){
        console.log(`App listening on PORT: ${PORT}`);
    })

  