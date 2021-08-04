const fs = require('fs');
const path = require('path');

const readDir = (dirObj, response, mode = true) => {
  const errCode = mode ? 201 : 404;
  const errMsg = mode ? { data: [] } : 'Not Found!';

  const { furnitures, models } = dirObj;

  const publlicImage = `/public/images/${furnitures}`;

  const dirPath = path.join(__dirname, publlicImage, models ? models : '');

  fs.readdir(dirPath, (err, dir) => {
    if (err) {
      response.status(errCode).send(errMsg);
      return;
    }

    if (mode) {
      response.status(200).send({ data: dir });
      return;
    }

    const file = [];

    dir.forEach((names) => {
      file.push(path.join(publlicImage.replace('/public', ''), models, names));
    });

    response.status(200).send({ data: file });
  });
};

module.exports = { readDir };
