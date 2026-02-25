# Domain-модели

- User, Chat, Message, GroupChat, Settings, CachedEntry

# DTO

- UserDTO, ChatDTO, MessageDTO, SettingsDTO

# Инварианты

- Длина сообщений ≤ 1000 символов
- Макс. участников в группе = 50

# DTO → Domain

| DTO             | Domain          | Преобразование     |
|-----------------|-----------------|--------------------|
| UserDTO.name    | User.username   | Трим пробелов      |
| MessageDTO.text | Message.content | C/F не применяется |