const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const cors = require('cors');
app.use(express.json());
app.use(cors('*'));
app.post('/send/email', (req, res) => {
    let receiverMailAddress = req.body.receiverMailAddress;
    let subject = req.body.subject;
    let emailBody = req.body.emailBody;
    let file = req.body.file;
    console.log(file);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
        },
    });
    let mailOptions = {
        from: process.env.USER_EMAIL,
        to: receiverMailAddress,
        subject: subject,
        text: emailBody,
        // attachments: [
        //     {
        //         path: './information.txt',
        //     },
        // ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        error
            ? res
                  .status(404)
                  .send('Unable to send email probably error on gmail side ')
            : res.send('Email sent successfully');
    });

    console.log(receiverMailAddress + ' ' + subject + ' ' + emailBody);
});

app.listen(process.env.PORT || 3001, () =>
    console.log(`SERVER LISTENING ON PORT ${process.env.PORT || 3001}`)
);
