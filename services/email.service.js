const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "4360dipengediya@gmail.com",
        pass: "zleiohsimlvxlsxc",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(to,subject,data) {
    // send mail with defined transport object
    return transporter.sendMail({
        from: '"👻" <4360dipengediya@gmail.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: data, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });
}

module.exports = sendEmail;