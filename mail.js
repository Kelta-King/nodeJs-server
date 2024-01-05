const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider (e.g., 'gmail', 'hotmail')
  auth: {
    user: 'webdeveloperkelta@gmail.com', // Your email address
    pass: 'sauw etcu bwli cvwq' // Your email password or an app-specific password
  }
});

// Define the email options
const mailOptions = {
  from: 'webdeveloperkelta@gmail.com', // Sender's email address
  to: 'legalnisarg299@gmail.com', // Recipient's email address
  subject: 'Test Email', // Email subject
  text: 'Hello, this is a test email!' // Email body (plaintext)
  // html: '<p>Hello, this is a test email!</p>' // Email body (HTML)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Email sent:', info.response);
});
