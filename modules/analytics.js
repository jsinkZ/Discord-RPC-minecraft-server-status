// Библиотеки

const fs = require("fs");

// Переменные

const newLineChar = process.platform === "win64" ? "\r\n" : "\n";
const Data = new Date();
const day = Data.getDate();
const month = Data.getMonth();
const year = Data.getFullYear();
const hour = Data.getHours();
const min = Data.getMinutes();
const sec = Data.getSeconds();

// * to format

let tfmonth = month <= 9 ? "0" + month : month;
let tfhour = hour <= 9 ? "0" + hour : hour;
let tfmin = min <= 9 ? "0" + min : min;
let tfsec = sec <= 9 ? "0" + sec : sec;

const form = `[${day}.${tfmonth}.${year}] at [${tfhour}:${tfmin}:${tfsec}]`;

// Выполнение модуля

const writeInfo = (file, text) => {
	fs.appendFileSync(file, `${form} | ${text} ${newLineChar}`, (err) => console.error(chalk.red(`[ERROR]: ${err}`)));
};

// Экспорт

module.exports = { writeInfo };
