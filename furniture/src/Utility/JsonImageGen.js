const fs = require('fs');
const path = require('path');

const dree = require('dree');

const filteredTree = () => {
  const dir = path.join(__dirname, '..', '..', 'public', process.argv[2]);
  console.log(dir);

  const tree = dree.scan(dir);

  fs.writeFile(
    path.join(__dirname, 'Tree.json'),
    JSON.stringify(tree),
    (err) => {
      if (err) throw err;
    }
  );
};

filteredTree();
