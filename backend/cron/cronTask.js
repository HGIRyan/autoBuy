const cron = require("node-schedule");

const task = (app) => {
  cron.scheduleJob("*/5 * * * *", async () => {
    console.log("ITS A 5th Minute");
  });
};

module.exports = {
  task,
};
