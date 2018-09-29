#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const reactDocs = require("react-docgen");

const srcDir = path.resolve(__dirname, "..", "js", "src");
const componentDir = path.resolve(srcDir, "components");

function getDocumentableFiles(dir) {
  return fs
    .readdirSync(componentDir)
    .filter(fileName => !/^index/.test(fileName) && !/\.spec\./.test(fileName));
}

getDocumentableFiles(componentDir)
  .map(fileName => fs.readdirSync(path.resolve(componentDir, fileName)))
  .map(reactDocs.parse)
  .map(console.log);
