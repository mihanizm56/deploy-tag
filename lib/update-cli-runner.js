const { spawnSync } = require('child_process');
const { Listr } = require('listr2');
const { Select } = require('enquirer');

const updateCliRunner = async nextTags => {
  const updateTitles = nextTags.map(({ title }) => title);

  try {
    const runner = new Listr([
      {
        task: async () => {
          const prompt = new Select({
            message: 'Выберите версию тэга для деплоя',
            choices: updateTitles,
          });

          const selectedTitle = await prompt.run();

          const tag = nextTags.find(({ title }) => title === selectedTitle).tag;

          spawnSync('bash', [`config/deploy/deploy-tag/deploy-tag.sh ${tag}`], {
            stdio: 'inherit',
            shell: true,
            windowsHide: true,
          });
        },
      },
    ]);

    await runner.run();
  } catch {} // eslint-disable-line no-empty
};

module.exports.updateCliRunner = updateCliRunner;
