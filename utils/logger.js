const chalk = require("chalk");

module.exports = {
  info: (msg) => console.log(chalk.blue("[INFO]"), msg),
  success: (msg) => console.log(chalk.green("[SUCCESS]"), msg),
  warn: (msg) => console.log(chalk.yellow("[WARNING]"), msg),
  error: (msg) => console.log(chalk.red("[ERROR]"), msg),
};
