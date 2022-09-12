const { exec } = require('./fs-promises');

const getPrevTag = async () => {
  await exec('git pull && git fetch');

  // get output
  const { stdout } = await exec('git describe --tags');
  // format output
  const tag = stdout.replace(/v?(\d+\.\d+\.\d+).*/, '$1').trim();

  return tag;
};

module.exports.getPrevTag = getPrevTag;
