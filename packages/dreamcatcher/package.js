Package.describe({
  name: 'smag0:dreamcatcher',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['dreamcatcher.js']);
  api.addAssets(['dreamcatcherSketch.html','mysketch.pde'], 'client');
});
// api.addFiles(['lib/processing.min.js'], 'client');

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('smag0:dreamcatcher');
  api.addFiles('dreamcatcher-tests.js');
});
