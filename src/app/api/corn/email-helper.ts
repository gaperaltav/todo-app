import nodemailer, { Transporter, TransportOptions } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const {
  EMAIL_SERVER_HOST: host,
  EMAIL_SERVER_PORT: port = "587",
  EMAIL_SERVER_USER: user,
  EMAIL_SERVER_PASSWORD: pass,
} = process.env;

function _getTransport() {
  const options: SMTPTransport.Options = {
    host,
    port: parseInt(port),
    secure: false,
    auth: {
      user,
      pass,
    },
  };

  const transporter: Transporter = nodemailer.createTransport(options);
  return transporter;
}

export async function sendPendingTodoEmail(email: string, userName: string) {
  const transporter = _getTransport();

  const info = await transporter.sendMail({
    from: '"Todo app" <no-reply@todoapp.com>', // sender address
    to: email, // list of receivers
    subject: "You have pending todos ",
    text: "",
    html: `<p>HI, ${userName} <br /> you have a pending task to complete by today, please make time to complete them <br/> Have a nice day!</p>`,
  });

  console.log("Eamil sended with id: %s", info.messageId);
}
