require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    //debug: true,
    //logger: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function sendEmail() {
    try {
        const info = await transporter.sendMail({
            from: 'teste@gmail.com',
            to: 'alASDADQWDQDQD1231321AWE123123145EQW11D65QW16E5Q1W56EWQlmeidajr@JORNADATECNOLOGIA.com',
            subject: 'Testando envio de e-mail com Node.js e SMTP',
            text: 'tereOlá! Este é um e-mail de teste enviado pelo Nodemailer com SMTP.',
            html: `
                <div style="display: flex; justify-content: center; align-items: center;">
                    <img src="https://media1.tenor.com/m/WGfLSON0pKgAAAAd/gato-apaixonado.gif" alt="Jornadinha Linda" />
                </div>
                <p>Este é um e-mail de teste enviado pelo Nodemailer com SMTP.</p>
            `
        });

        console.log('E-mail enviado com sucesso:', info.messageId);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}
sendEmail();
