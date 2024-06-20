import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter, TransportOptions } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function GET(request: NextRequest) {
  const {
    EMAIL_SERVER_HOST: host,
    EMAIL_SERVER_PORT: port = "587",
    EMAIL_SERVER_USER: user,
    EMAIL_SERVER_PASSWORD: pass,
  } = process.env;

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

  const info = await transporter.sendMail({
    from: '"Todo app" <no-reply@todoapp.com>', // sender address
    to: "gaperaltav@gmail.com", // list of receivers
    subject: "You have pending todos ",
    text: "",
    html: "<p>HI, <br /> you have a pending task to complete by today, please make time to complete them <br/> Have a nice day!</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  return NextResponse.json(
    { host, port },
    {
      status: 200,
    }
  );
}
