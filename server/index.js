const express = require('express');
const { readDir, imageSender } = require('./Utility/directoryReader');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on localhost : ${PORT}`);
});

app.get('/api/:furnitures', (request, response) => {
  readDir(request.params, response, true);
});

app.get('/api/:furnitures/:models', (request, response) => {
  readDir(request.params, response, false);
});

app.get('/images/:furnitures/:models/:file', (request, response) => {
  const { furnitures, models, file } = request.params;
  const dirPath = __dirname + `/public/images/${furnitures}/${models}/${file}`;

  response.status(200).sendFile(dirPath);
});

app.get('/api/backgrounds', (_, response) => {
  imageSender(response);
});
