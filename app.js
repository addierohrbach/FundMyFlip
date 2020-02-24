const express = require('express')
const app = express()
const port = 3000
var path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// -------- HOME PAGE --------
app.get('/index.html', (req, res) => { res.sendFile(path.join(__dirname + '/index.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

// -------- PROBLEMS PAGE --------
app.get('/problems.html', (req, res) => { res.sendFile(path.join(__dirname + '/problems.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

// -------- ABOUT PAGE --------
app.get('/about.html', (req, res) => { res.sendFile(path.join(__dirname + '/about.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

// -------- CASE STUDIES PAGE --------
app.get('/cases.html', (req, res) => { res.sendFile(path.join(__dirname + '/cases.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

app.get('/chicago.html', (req, res) => { res.sendFile(path.join(__dirname + '/chicago.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

// -------- 101 PAGE --------
app.get('/101.html', (req, res) => { res.sendFile(path.join(__dirname + '/101.html')); });

  app.post('/', (req, res) => {
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adelinerohrbach2020@u.northwestern.edu',
      from: 'adelinerohrbach2020@u.northwestern.edu',
      subject: 'Fund My Flip: New Connection',
      text: req.body.last_name,
      html: 'name: ' + req.body.first_name + ' ' + req.body.last_name + '\n' +
            'cell phone: ' + req.body.cell_phone + '\n' +
            'email: ' + req.body.email,
  };
  sgMail.send(msg);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
