const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on localhost : ${PORT}`);
});

app.get('/api/:furnitures/:models', (request, response) => {
  const { furnitures, models } = request.params;
  response
    .status(201)
    .send(__dirname + `/public/images/${furnitures}/${models}`);
});
