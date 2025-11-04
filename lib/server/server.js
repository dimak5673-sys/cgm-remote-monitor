'use strict';

const express = require('express');
const app = express();

// Подключаем остальные модули Nightscout
require('../config'); // если есть конфиг
require('./routes');   // если есть роуты
require('./plugins');  // если есть плагины

// Любые существующие middleware и setup остаются без изменений
// ...

// --- Ключевое исправление для Render ---
const PORT = process.env.PORT; // Render назначает порт автоматически
if (!PORT) {
  console.error('ERROR: process.env.PORT is undefined. Nightscout должен работать на Render!');
  process.exit(1);
}

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Nightscout server listening on port ${PORT}`);
});
