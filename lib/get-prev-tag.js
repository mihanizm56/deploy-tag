const { exec } = require('./fs-promises');

const getPrevTag = async () => {
  // get output
  const { stdout } = await exec('git describe --tags');
  // format output
  const tag = stdout.replace(/(v?\d\.\d\.(\d\d\d|\d\d|\d|)).*/, '$1').trim();

  return tag;
};

module.exports.getPrevTag = getPrevTag;
