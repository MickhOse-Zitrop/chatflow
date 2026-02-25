# Конфиг

- units: C
- cache_ttl_minutes: 10
- forecast_days_default: 3
- network_timeout_seconds: 5

# Локальные файлы

- favorites.json
- settings.json
- cache/

# Политика кеша

- Сообщения + настройки
- TTL 10 минут

# Ограничения

- max участников = 50
- таймаут сети = 5 сек

# Политика ошибок

- Показываем пользователю читаемое сообщение
- Логируем кратко в консоль