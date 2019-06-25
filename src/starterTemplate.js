const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(200);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const foundUser = db.findOne({ username, password });
  if (foundUser) {
    // return set-cookie header or jwt token({jwt: "jwt token here"}).
  } else {
    res.sendStatus(401);
  }
});

app.get('/secure', (req, res) => {
  let id; // replace with your own logic to get id from cookie or jwt

  const foundUser = db.findOne({ id });
  if (foundUser) {
    return res.json({ username: foundUser.username });
  }
  res.sendStatus(401);
});

app.post('/logout', (req, res) => {
  // clear cookie if there is cookie.
  res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => console.log(`running at port ${port}`));
