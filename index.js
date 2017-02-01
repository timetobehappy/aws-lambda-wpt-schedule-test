'use strict';

var request = require('request');



exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    request('http://www.webpagetest.org/runtest.php?url=www.example.com&k=YOURWPTKEY&label=YOURLABELFOREASYSEARCH&location=LOCATION:Chrome&video=1', function (error, response, body) {
    console.log("www.example.com");
    console.log(response.statusCode);
    callback(null,response.statusCode);
})



};
