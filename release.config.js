module.exports = {
  debug: true,
  branches: ['main'],
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  success: ['@semantic-release/github'],
}
