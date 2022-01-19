const fs = require('fs');
const path = require("path");

function readFile(filePath) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    return undefined;
  }
}

module.exports.readFile = readFile;
