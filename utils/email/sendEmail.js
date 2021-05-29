const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const sendEmail = async (email, subject, payload, template) => {
  try {
    const CLIENTID = process.env.CLIENT_ID;
    const CLIENTSECRET = process.env.CLIENT_SECRET;
    const REDIRECTURL = process.env.REDIRECT_URL;
    const REFRESHTOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(
      CLIENTID,
      CLIENTSECRET,
      REDIRECTURL
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESHTOKEN });

    const accessToken = await oAuth2Client.getAccessToken();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",

      service: "gmail",
      // port: 465,
      // secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.MAILID,
        // pass: process.env.PASSWORD
        clientId: CLIENTID,
        clientSecret: CLIENTSECRET,
        refreshToken: REFRESHTOKEN,
        accessToken: accessToken,
      },
    });

    console.log("sent");
    const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    // console.log(source)
    const compiledTemplate = handlebars.compile(source);
    const options = () => {
      return {
        from: "Multroic Games <multroic@gmail.com>",
        to: email,
        subject: subject,
        html: compiledTemplate(payload),
      };
    };

    // Send email
    transporter.sendMail(options(), (error, info) => {
      if (error) {
        return error;
      } else {
        return res.status(200).json({
          success: true,
        });
      }
    });
  } catch (error) {
    // return error;
    console.log(error);
  }
};

/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/

module.exports = sendEmail;
