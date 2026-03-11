const Balance = require("../models/balance");
const User = require("../models/user");
const emailService = require("./emailService");

exports.generateMonthlyReport = async () => {

const users = await User.findAll();

for (let user of users) {

const balances = await Balance.findAll({
where: { user_id: user.id }
});

await emailService.sendMonthlyReport(user.email, balances);

}

};