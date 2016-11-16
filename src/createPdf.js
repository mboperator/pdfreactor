import system from 'system';
import path from 'path';
const args = system.args;

const page = webPage.create();
page.viewportSize = { width: 1920, height: 1080 };

// Open HTML from Disk
page.open(args[1], status => {
  console.log('STATUS', status);
  // Render PDF
  page.render('hello.pdf', {format: 'pdf', quality: 100});
  system.stdout.write(path.join(__dirname, 'hello.pdf'));
  phantom.exit();
});
// Upload PDF to S3
// Return link to PDF
