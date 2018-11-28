const fs = require('fs');
const handlers = require('../server/handlers');
const path = require('path');
require('dotenv').config();
const request=require('request');

const search = (req, res, value) => {
  let searchUrl = 'https://www.food2fork.com/api/search?key=' + process.env.API_KEY + '&q=' + value;
  request(searchUrl, (error, response, body) => {
    if(error || (response.statusCode !== 200)){
      handlers.errorHandler();
    }else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(body);
    }

  });


};

module.exports = {search};
