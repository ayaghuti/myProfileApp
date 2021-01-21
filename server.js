const express = require('express');
const sendMail = require('./mail');
const path = require('path');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000; 

app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  // console.log('Data', req.body);
  if(email === '' || subject === '' || text === '') {
    return res.status(401).json({ message: 'Please enter all fields' })
  }
  sendMail(email, subject, text, function(err, data) {
    if(err) {
      res.status(500).json({ message: 'Internal Error'})
    } else {
      res.json({ message: 'Email sent!!!' })
    }
  })
})


// serve static assets if in production

if(process.env.NODE_ENV === 'production') {

// set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


