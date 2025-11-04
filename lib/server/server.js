'use strict';

const server = require('./lib/server/server'); // оригинальный сервер Nightscout

// Подставляем порт Render
const PORT = process.env.PORT || 10000;

if (server && server.listen) {
  server.listen(PORT, () => {
    console.log(`Nightscout server listening on port ${PORT}`);
  });
}
