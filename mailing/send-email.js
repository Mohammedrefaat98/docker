var nodemailer = require('nodemailer');

var mail = 'mohrefaat98@gmail.com';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohrefaat98@gmail.com',
    pass: '89918042'
  }
});



let mailOptions = {
  from: 'mohrefaat98@gmail.com',
  to: mail,
  subject: 'You have an event coming up',
  text: `You have an event coming up. Please cheak your app to know more`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});