// Create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const commentsPath = path.join(__dirname, 'comments.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong');
      return;
    }
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).send('Something went wrong');
        return;
      }
      res.json(req.body);
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running');
});