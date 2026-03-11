const cron = require("node-cron");
const reportService = require("../services/reportService");

cron.schedule("0 0 1 * *", async () => {

console.log("Generating monthly reports...");

await reportService.generateMonthlyReport();

});