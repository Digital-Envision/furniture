const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on localhost : ${PORT}`);
});

app.get('/api/:furnitures', (request, response) => {
  const { furnitures } = request.params;

  const dirPath = __dirname + `/public/images/${furnitures}`;

  fs.readdir(dirPath, (err, models) => {
    if (err) {
      response.status(200).send({ data: [] });
      return;
    }

    response.status(200).send({ data: models });
  });
});

app.get('/api/:furnitures/:models', (request, response) => {
  const { furnitures, models } = request.params;

  const dirPath = __dirname + `/public/images/${furnitures}/${models}`;
  const file = [];

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      response.status(404).send('Not Found!');
      return;
    }

    files.forEach((names) => {
      file.push(path.join(`images/${furnitures}/${models}`, names));
    });

    response.status(200).send({ data: file });
  });
});

app.get('/images/:furnitures/:models/:file', (request, response) => {
  const { furnitures, models, file } = request.params;
  const dirPath = __dirname + `/public/images/${furnitures}/${models}/${file}`;

  response.status(200).sendFile(dirPath);
});

app.get('/api/backgrounds', (request, response) => {
  const dirPath = __dirname + `/public/images/Backgrounds`;

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      response.status(200).send({ data: [] });
      return;
    }

    files.forEach((names) => {
      file.push(path.join(`images/Backgrounds`, names));
    });

    response.status(200).send({ data: file });
  });
});
