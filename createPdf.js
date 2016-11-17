var system = require('system');
var args = system.args;

var page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1080 };

// Open HTML from Disk
page.open(args[1], function(status) {
  // Render PDF
  page.render('hello.pdf', {format: 'pdf', quality: 100});
  system.stdout.write('/tmp/hello.pdf');
  phantom.exit();
});
