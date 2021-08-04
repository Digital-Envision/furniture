const fs = require('fs');
const path = require('path');

const readDir = (dirObj, response, mode) => {
  const errCode = mode ? 201 : 404;
  const errMsg = mode ? { data: [] } : 'Not Found!';

  const { furnitures, models } = dirObj;

  const publlicImage = `/public/images/${furnitures}`;

  const dirPath = path.join('./', publlicImage, models ? models : '');

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

    response.status(200).send({
      data: {
        Base: file[0],
        Center: file[1],
        Left: file[2],
        Right: file[3],
      },
    });
  });
};

const imageSender = (response) => {
  const dirPath = path.join('./', `/public/images/Backgrounds`);

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
};

module.exports = { readDir, imageSender };
