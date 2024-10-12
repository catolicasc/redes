require('dotenv').config();
const express = require("express")
const app = express()
app.use(express.json())
app.post("/enviar-email",  (req, res) => {    
    const { from, to, subject, text, html } = req.body
    sendEmail({ to, from, subject, text, html })
    res.json({message: { from, to, subject, text, html }})
})

app.listen("3000", function () {
    console.log("SUBIU, GLORIAS!!")
})


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    debug: true,
    logger: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function sendEmail({ from, to, subject, text, html }) {
    try {
        const info = await transporter.sendMail({
            from,
            to,
            subject,
            text,
            html
        });
        console.log('E-mail enviado com sucesso:', info.messageId);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}
