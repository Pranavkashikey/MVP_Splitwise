const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

service: "gmail",

auth: {
user: "yourgmail@gmail.com",
pass: "your_app_password"
}

});

exports.sendMonthlyReport = async (email, balances) => {

let report = "Your Monthly Balance Report\n\n";

balances.forEach(b => {

report += `You owe ${b.amount} to user ${b.owes_to}\n`;

});

await transporter.sendMail({

from: "yourgmail@gmail.com",
to: email,
subject: "Monthly Expense Report",
text: report

});

};