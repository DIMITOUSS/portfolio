// server.js

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Your Name" <your-email@gmail.com>',
    to: "oussama.kechairi@gmail.com",
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  console.log("Message sent: %s", info.messageId);

  res.send("Email sent successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
