'use strict';

const express = require('express');
const app = express();

// --- Настройка middleware, роутов, плагинов Nightscout ---
// Если в твоей версии есть, оставь свои require
// Если нет — просто пропускаем

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
