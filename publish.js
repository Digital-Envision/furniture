const ghPages = require('gh-pages');
const path = require('path');

const BRANCH = 'gh-pages';

ghPages.publish(
  path.join(__dirname, './build'),
  { branch: BRANCH },
  () => {
    console.log(`Publish to ${BRANCH} completed`);
  }
);
