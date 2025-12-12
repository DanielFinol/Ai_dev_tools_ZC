const http = require('http');
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils');

const PORT = process.env.WS_PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('y-websocket server');
});

const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req, { gc: true });
});

server.listen(PORT, () => console.log(`y-websocket server listening on ${PORT}`));
