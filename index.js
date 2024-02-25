'use strict';

const http = require('http');
const app = require('./app'); // Import the refactored Express app

const serverPort = 8080;

http.createServer(app).listen(serverPort, function () {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
});
