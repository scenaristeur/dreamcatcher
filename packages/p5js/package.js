Package.describe({
	name:'bgrayburn:p5js',
  summary: " p5.js v0.4.7 ",
  version: "1.0.0",
  git: " https://github.com/bgrayburn/meteor-p5-js "
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");
  api.addFiles(['lib/p5.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bgrayburn:p5js');
  api.addFiles('bgrayburn:p5js-tests.js','client');
});
