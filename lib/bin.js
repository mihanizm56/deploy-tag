#!/usr/bin/env node
const { spawnSync } = require('child_process');

const bin = () => {
  console.log('process.cwd', process.cwd());
  console.log('__dirname', __dirname);

  spawnSync('node', ['@mihanizm56/deploy-tag/index.js'], {
    stdio: 'inherit',
    shell: true,
    windowsHide: true,
  });
};

bin();
