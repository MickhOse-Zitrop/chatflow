# Архитектурный стиль

MVC (Model-View-Controller)

# Слои

- UI (Views)
- Controller
- Service (use cases)
- Domain (модели)
- Infrastructure (WebSocket, DB)

# Модули

- Auth — регистрация/вход
- Chat — личные и групповые чаты
- Messaging — отправка/получение сообщений
- Settings — управление настройками

# Правила зависимостей

- UI → Controller → Service → Domain → Infrastructure
- Обратные зависимости запрещены