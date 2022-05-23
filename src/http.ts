import http from 'node:http';
import api from '@ioa/api';
import { app, argv } from 'ioa';
import request from './request.js';
import debug from './debug.js';

const { config } = app();

let port = 8800;

if (argv.port && argv.port[0]) {
  port = Number(argv.port[0]);
} else if (argv.p && argv.p[0]) {
  port = Number(argv.p[0]);
} else if (config && config.port) {
  port = Number(config.port);
}

if (config.debug) {
  api.use(debug);
}

const server = http.createServer({
  // requestTimeout: 4000,
  // headersTimeout: 1000
});

server.on('request', request)

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})

server.listen(port);

console.log(`\x1b[36mhttp://localhost:${port}\x1b[30m`);
