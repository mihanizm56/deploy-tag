const { updateCliRunner } = require('./update-cli-runner');
const { getNextTags } = require('./get-next-tags');
const { getPrevTag } = require('./get-prev-tag');

const run = async () => {
  // get prev tag
  const prevTag = await getPrevTag();
  // get next tags info
  const nextTags = getNextTags(prevTag);
  // run cli and "git tag" it
  await updateCliRunner(nextTags);
};

run();
