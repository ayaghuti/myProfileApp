const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'mailgun_api_key',
    domain: 'mailgun_domain'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'a.yaghuti1976@gmail.com',
    subject,
    text
  };
  
  transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports = sendMail;