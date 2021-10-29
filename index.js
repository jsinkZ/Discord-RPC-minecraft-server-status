// Библиотеки

const fs = require("fs");
const path = require("path");
const id = "<YOUR_APPLICATION_ID>"; // * Требуется прописать
const client = require("discord-rich-presence")(id);
const util = require("minecraft-server-util");

// Переменные

const filePath = path.join(__dirname, "config.txt");
const data = fs.readFileSync(filePath, { encoding: "utf-8" });
const ip = data.split(";")[0].split(" ")[1];
const port = data.split(";")[1].split(" ")[1];
const seconds = data.split(";")[2].split(" ")[2];

// Изображения
// Если изображения нет, необходим удалить свойство из updatePresence

const largeImg = "<LARGE-IMAGE-KEY>"; // * Требуется прописать
const onlineImg = "<SMALL-IMAGE-KEY-ONLINE>"; // * Требуется прописать
const offlineImg = "<SMALL-IMAGE-KEY-OFFLINE>"; // * Требуется прописать

setInterval(() => {
	util
		.status(ip)
		.then((response) => {
			client.updatePresence({
				details: `Версия: ${response.version}`,
				state: `Игроков: ${response.onlinePlayers} / ${response.maxPlayers}`,
				largeImageKey: largeImg,
				largeImageText: `ip: ${ip}:${port}`,
				smallImageKey: onlineImg,
				instance: true,
			});
		})
		.catch(() => {
			client.updatePresence({
				state: "Сервер оффлайн!",
				largeImageKey: largeImg,
				largeImageText: `ip: ${ip}:${port}`,
				smallImageKey: offlineImg,
				instance: true,
			});
		});
}, seconds * 1000);
