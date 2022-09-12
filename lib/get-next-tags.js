const getNextTags = prevTag => {
  const [prevMajor, prevMinor, prevPatch] = prevTag.split('.');

  // increment versions
  const nextPatchVersion = `v${prevMajor}.${prevMinor}.${+prevPatch + 1}`;
  const nextMinorVersion = `v${prevMajor}.${+prevMinor + 1}.0`;
  const nextMajorVersion = `v${+prevMajor + 1}.0.0`;

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
