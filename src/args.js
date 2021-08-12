const fs = require('fs')
const Course = require('./course.js');

const COURSE_REGEXP = new RegExp(`(${Object.values(Course).join('|')})-\\d+`);

const parseInput = (args = []) => {
  // noinspection JSUnusedLocalSymbols
  const [_, __, intensive, targetDir] = args;

  if (!COURSE_REGEXP.test(intensive)) {
    console.error('Wrong intensive descriptor');
    return {};
  }

  if (!fs.existsSync(targetDir)) {
    console.error(`Directory does not exist: ${targetDir}`);
    return {};
  }

  return {intensive, targetDir}
};

module.exports = {parseInput};
