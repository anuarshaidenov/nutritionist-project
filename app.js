const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', (req, res) => {
    const {name, number, description} = req.body;
    console.log(req.body);

    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'anuarshaidenov@gmail.com', // generated ethereal user
          pass: 'parolichi7', // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = transporter.sendMail({
        from: 'anuarshaidenov@gmail.com', // sender address
        to: "gmwellnesshealth@gmail.com", // list of receivers
        subject: "Test", // Subject line
        html: "<ul><li>Name: " + name + "</li></ul><li> Number: " + number + "</li><li>Description: " + description + "</li>" // html body
      }, (err, data) => {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log(data);
                res.sendStatus(200);
            }
      });
    
    
    
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server started'));