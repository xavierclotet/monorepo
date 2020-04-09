module.exports = {
  name: 'mylib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mylib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
