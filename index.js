'use strict';

let request = require('request');

let url = process.env.url;
let key = process.env.key;
let label = process.env.label;
let testLocation = process.env.testLocation;
let browser = process.env.browser;
let connectivity = process.env.connectivity;

let wptApi = `http://www.webpagetest.org/runtest.php?url=${url}&k=${key}&label=${label}&location=${testLocation}:${browser}.${connectivity}&video=1`;

exports.handler = (event, context, callback) => {

    //console.log(wptApi);

    request(wptApi, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback(null, `${url} test submitted!`);
        } else {
            callback(new Error('Test failed!'));
        }
    });


};
