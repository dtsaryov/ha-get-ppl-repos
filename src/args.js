const fs = require('fs')
const Course = require('./course.js');

const createIntensiveRegexp = () => new RegExp(`(${Object.values(Course).join('|')})-(\\d+)`, 'g');

const parseArgs = (args = []) => {
  // noinspection JSUnusedLocalSymbols
  const [_, __, intensiveDescriptor, targetDir] = args;

  if (!createIntensiveRegexp().test(intensiveDescriptor)) {
    console.error('Wrong intensive descriptor');
    return {};
  }

  if (!fs.existsSync(targetDir)) {
    console.error(`Directory does not exist: ${targetDir}`);
    return {};
  }

  const [course, intensiveNumber] = [...intensiveDescriptor.matchAll(createIntensiveRegexp())][0].slice(1);
  return {
    intensive: {course, intensiveNumber},
    targetDir
  }
};

module.exports = {parseArgs};
