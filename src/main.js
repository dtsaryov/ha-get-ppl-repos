const {parseArgs} = require('./args.js');
const {getToken} = require('./config.js');
const {getUserRepositories} = require('./github.js');
const {filterRepositories} = require('./filter.js');
const {clone} = require("./git");

const main = (args) => {
  const {intensive, targetDir} = parseArgs(args);

  getUserRepositories(getToken())
    .then(({data}) => {
      const studentRepositories = filterRepositories(data, intensive);
      clone(studentRepositories, targetDir);
    })
};

module.exports = main;
