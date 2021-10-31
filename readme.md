# Discord RPC Minecraft status v1.1.3

## Данный RPC показывает статус сервера minecraft и количество

![Picture dead :p](https://i.imgur.com/QKF7sAS.png)
![Picture dead :p](https://i.imgur.com/uXNNRbz.png)

## А также ведет аналитику о максимальном количестве игроков

![Picture dead :p](https://i.imgur.com/IdmfmcZ.png)

## Установка

Для запуска Discord RPC Minecraft Status нужно:

1. [Node.js](https://nodejs.org/) v10+.
2. npm v6.14.10+
3. Установленный git
4. Установить все зависимости

```sh
cd Discord-RPC-minecraft-server-status
npm i
```

## Настройка:

- Весь конфиг настраивает через config.json
- ID - [ID приложения](https://discord.com/developers/applications) | Обязательное значение
- IP - IP адрес minecraft сервера (нужен для запросов) | Обязательное значение
- PORT - Port сервера (нужен для отображения адреса в RPC) | Необязательное значение
- LARGE_IMAGE - Ключ к большому изображению (largeImageKey) в RPC (см. пример ниже) | Необязательное значение
- ONLINE_IMAGE - Ключ к маленькому изображению (онлайн) (smallmageKey) в RPC (см. пример ниже) | Необязательное значение
- OFFLINE_IMAGE - Ключ к маленькому изображению (оффлайн) (smallImageKey)в RPC (см. пример ниже) | Необязательное значение
- SECONDS - Частота обновления RPC (отображения количества игроков) | Обязательное значение

Пример RPC
![Picture dead :p](https://i.imgur.com/wBzQFRS.png)

Вся аналитика хранится в файле info.txt (если его нет, приложение само создаст его)

## Для разработки

- [Документация по RPC](https://discord.com/developers/docs/rich-presence/how-to)
- [Документация по minecraft-server-util](https://www.npmjs.com/package/minecraft-server-util)

### По вопросам писать в discord jsink\_#4005 или на [сервер](https://discord.gg/UQetxM5)
