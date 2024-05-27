const fs = require('fs');
const path = require('path');

// List of files to perform substitutions on
const filesToProcess = [
  'about.html',
  'index.html',
  'hubs.html',
  'join.html',
  'meet.html',
  'partners.html',
  'sponsorship.html',
];

// Read the content of header.html and footer.html
const headerContent = fs.readFileSync('header.html', 'utf8');
const footerContent = fs.readFileSync('footer.html', 'utf8');

// Function to replace content between markers
function replaceContent(filePath) {
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace Header content
    const headerRegex = /<!-- Header -->[\s\S]*?<!-- \/Header -->/;
    fileContent = fileContent.replace(headerRegex, `<!-- Header -->\n${headerContent}\n<!-- /Header -->`);

    // Replace Footer content
    const footerRegex = /<!-- Footer -->[\s\S]*?<!-- \/Footer -->/;
    fileContent = fileContent.replace(footerRegex, `<!-- Footer -->\n${footerContent}\n<!-- /Footer -->`);

    // Write the updated content back to the file
    fs.writeFileSync(filePath, fileContent, 'utf8');
}

// Process each file
filesToProcess.forEach(replaceContent);

console.log('Content replacement completed.');
