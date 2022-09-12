#!/usr/bin/env node
const { spawnSync } = require('child_process');

const bin = () => {
  spawnSync('node', ['node_modules/@mihanizm56/deploy-tag/lib/index.js'], {
    stdio: 'inherit',
    shell: true,
    windowsHide: true,
  });
};

bin();
