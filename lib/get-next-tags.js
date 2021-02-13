const getNextTags = prevTag => {
  // get tag without "v" prefix
  const prevFormattedTag = prevTag.replace(
    /v?(\d\.\d\.(\d\d\d|\d\d|\d|)).*/,
    '$1',
  );
  const [prevMajor, prevMinor, prevPatch] = prevFormattedTag.split('.');

  // increment versions
  const nextPatchVersion = `v${prevMajor}.${prevMinor}.${+prevPatch + 1}`;
  const nextMinorVersion = `v${prevMajor}.${+prevMinor + 1}.${prevPatch}`;
  const nextMajorVersion = `v${+prevMajor + 1}.${prevMinor}.${prevPatch}`;

  // get next tags info
  return [
    {
      title: `${nextPatchVersion} (patch)`,
      tag: nextPatchVersion,
    },
    {
      title: `${nextMinorVersion} (minor)`,
      tag: nextMinorVersion,
    },
    {
      title: `${nextMajorVersion} (major)`,
      tag: nextMajorVersion,
    },
  ];
};

module.exports.getNextTags = getNextTags;
