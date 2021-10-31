// Библиотеки и модули

const chalk = require("chalk");
const version = require("../package.json").version;

// Переменные

const greeting = chalk.bold.green(`
>> Discord RPC minecraft server status запущен!
>> Версия: ${version} \n`);
const prod = chalk.italic.green("\n\n\t      by jsink_\n");
const adidas = chalk.bgGreen.black`
░░░░░░░░░░░░░░░░░░▄▄░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░▄██▄░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▄████▄░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░
███▄▄░░░░░░░░░░████████░░░░░░░░░░▄▄▄██
▀██████▄▄░░░░░░████████░░░░░░▄▄██████▀
░█████████▄░░░░████████░░░░▄█████████░
░░▀▀▀▀▀▀▀▀▀▀░░░▀▀▀▀▀▀▀▀░░░▀▀▀▀▀▀▀▀▀▀░░
░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░
░░░░▀████████████████████████████▀░░░░
░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░
░░░░░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░░░░░
░░░░░░░░░░░▄▄▄▄▄▄░▄▄░▄▄▄▄▄▄░░░░░░░░░░░
░░░░░░░░░░░░░░▀▀▀░▀▀░▀▀▀░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░██░▀▀░░░░░░██░░░░░░░░░░░░░
░▄█▀▀██░▄█▀▀██░██░▄█▀▀███░▄█▀▀██░█▀▀█▄
░█░░░██░█░░░██░██░█░░░███░█░░░██░▀███▄
░▀█▄▄██░▀█▄▄██░██░▀█▄▄███░▀█▄▄██░█▄▄█▀`;

const log = () => console.log(greeting, adidas, prod);

// Эскпорт

module.exports = { log };
