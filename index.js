// Библиотеки

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const config = require("./cfg.json");
const client = require("discord-rich-presence")(config.ID);
const util = require("minecraft-server-util");
const start = require("./modules/start");
const analytics = require("./modules/analytics");

// Переменные

const ip = config.IP;
const port = config.PORT ? `:${config.PORT}` : "";
const largeImg = config.LARGE_IMAGE;
const onlineImg = config.ONLINE_IMAGE;
const offlineImg = config.OFFLINE_IMAGE;
const seconds = config.SECONDS;
const stat = path.join(__dirname, "json/stat.json");

// Создание и настройка presence

const presenceConstructor = (response) => {
	const createPresence = {
		state: "Сервер оффлайн!",
		instance: true,
	};

	// Если большое изображение указано, добавляем в createPresence
	if (largeImg != "") {
		createPresence.largeImageKey = largeImg;
		createPresence.largeImageText = `ip: ${ip}${port}`;
	}
	// Если есть ответ от сервера (minecraft сервер найден или онлайн)
	if (response) {
		// Если есть ключ маленькой картинки, добавляем в createPresence

		if (onlineImg != "") createPresence.smallImageKey = onlineImg;

		createPresence.details = `Версия: ${response.version}`;
		createPresence.state = `Игроков: ${response.onlinePlayers} / ${response.maxPlayers}`;

		return createPresence;
	} else {
		// Ответа от сервера нет (minecraft сервер не найден или оффлайн)

		// Если Если есть ключ маленькой картинки, добавляем в createPresence
		if (offlineImg != "") createPresence.smallImageKey = offlineImg;
		else createPresence.details = `ip: ${ip}${port}`; // Иначе добавляем поле details
		return createPresence;
	}
};

// Запуск

start.log();

client.on("error", (err) => console.error(chalk.red(`[ERROR] ${err}`)));

client.on("shardError", (err) => console.error(chalk.red("[ERROR] A websocket connection encountered an error \n", err)));

process.on("unhandledRejection", (err) => console.error(chalk.red("[ERROR]: Unhandled promise rejection \n", err)));

// Работа RPC

setInterval(() => {
	util
		.status(ip)
		.then((response) => {
			// Получен ответ от сервера
			// Считываем макс. количество игроков
			let lastMaxPlayers = JSON.parse(fs.readFileSync(stat)).LASTMAXPLAYERS;

			// Если текущее кол.во игроков больше последнего указанного
			if (response.onlinePlayers > lastMaxPlayers) {
				lastMaxPlayers = {
					LASTMAXPLAYERS: response.onlinePlayers,
				};

				// Работа модуля аналитика
				fs.writeFileSync(stat, JSON.stringify(lastMaxPlayers), (err) => console.error(chalk.red(`[ERROR]: ${err}`)));
				analytics.writeInfo("info.txt", `New max count of player: ${response.onlinePlayers}`);
			}
			try {
				client.updatePresence(presenceConstructor(response));
			} catch (err) {
				console.error(chalk.red(`[ERROR]: ${err}`));
			}
		})
		.catch(() => {
			// Нет ответа от сервера или он оффлайн
			try {
				client.updatePresence(presenceConstructor());
			} catch (err) {
				console.error(chalk.red(`[ERROR]: ${err}`));
			}
		});
}, seconds * 1000);
