// Основные глобальные объекты и переменные

// 1) global (globalThis)

// 2) process — объект, описывающий текущий процесс Node.js.
// Через него управляют переменными окружения (process.env), аргументами командной строки (process.argv)
// и завершением работы программы (process.exit).
// console.log(process);
// console.log(process.env);
// console.log(process.argv);
// console.log(process.exit);

// 3) console — стандартный объект для вывода данных в терминал (console.log, console.error и др.).

// 4) __dirname — абсолютный путь к папке, в которой находится текущий исполняемый файл.
console.log(__dirname);

// 5) __filename — полный путь и имя текущего файла.
console.log(__filename);

// 6) module и exports — объекты для экспорта данных и функций из текущего модуля.

// 7) require() — функция для подключения внешних и встроенных модулей.

// 8) Таймеры — функции setTimeout, setInterval, setImmediate и их аналоги для очистки (clearTimeout, и т.д.).

// 9) Буферы и кодировки — глобальный класс Buffer для работы с бинарными данными.
