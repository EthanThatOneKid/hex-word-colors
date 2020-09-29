const { createReadStream, writeFile } = require("fs");
const Stream = require("stream");
const colors = require("hex-to-color-name");
const { createInterface } = require("readline");
const { validateHexNumeral } = require("./index");

const wordsFilePath = `./src/data/words.txt`;
const exportFilePath = `./reports/${new Date().valueOf()}.report.md`;
const withColorPreview = process.argv.includes("--color-preview");
const withTableByColor = process.argv.includes("--table-by-color");
const tableHeader = `| Word | Hexadecimal Counterpart | Color Representation |
| ---- | ----------------------- | -------------------- |`;
const colorMap = {
  white: "FFFFFF",
  black: "000000",
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
  pink: "FF00FF",
  yellow: "FFFF00",
};

let totalLines = 0;
let totalValidWords = 0;
let beganAt = new Date().valueOf();
let result = tableHeader;
let tables = {
  white: tableHeader,
  black: tableHeader,
  red: tableHeader,
  green: tableHeader,
  blue: tableHeader,
  pink: tableHeader,
  yellow: tableHeader,
};

const file = createInterface(createReadStream(wordsFilePath), new Stream());

file
  .on("line", (line) => {
    totalLines++;
    const hex = validateHexNumeral(line);
    if (hex !== null) {
      const colorName = colors(hex, colorMap);
      const color = withColorPreview
        ? `![#${hex}; ${colorName}](https://placehold.it/150x40/${hex}/FFFFFF?text=${colorName})`
        : colorName;
      const nextEntry = `\n|\`${line}\`|\`#${hex}\`|${color}|`;
      if (withTableByColor) {
        tables[colorName] += nextEntry;
      } else {
        result += nextEntry;
      }
      totalValidWords++;
    }
  })
  .on("close", () => {
    if (withTableByColor) {
      Object.entries(tables).forEach(([color, contents]) => {
        writeFile(
          exportFilePath.replace(".md", `.${color}.md`),
          contents,
          () => {
            console.log(`FINISHED:${color}`);
          }
        );
      });
    }
    writeFile(exportFilePath, result, () => {
      console.log("FINISHED", {
        totalValidWords,
        totalLines,
        ratio: `(${(100 * totalValidWords) / totalLines})%`,
        exportedTo: exportFilePath,
        elapsed: `${new Date().valueOf() - beganAt}ms`,
      });
    });
  })
  // .on("end", () => {
  //   console.log("end", a);
  // })
  .on("error", (error) => {
    throw error;
  });
