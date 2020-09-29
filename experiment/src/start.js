const { createInterface } = require("readline");
const { createReadStream, writeFile } = require("fs");
const { validateHexNumeral } = require("./index");
const colors = require("hex-to-color-name");

const wordsFilePath = `./src/data/words.txt`;
const exportFilePath = `./reports/${new Date().valueOf()}.report.md`;
const withColorPreview = process.argv[2] === "--color-preview";

let result = `| Word | Hexadecimal Counterpart | Color Representation |
| ---- | ----------------------- | -------------------- |`;

const file = createInterface({
  input: createReadStream(wordsFilePath),
  output: process.stdout,
  terminal: false,
});

file
  .on("line", (line) => {
    const hex = validateHexNumeral(line);
    if (hex !== null) {
      const colorName = colors(hex);
      const color = withColorPreview
        ? `![#${hex}; ${colorName}](https://placehold.it/150x40/${hex}/FFFFFF?text=${colorName})`
        : colorName;
      result += `\n|\`${line}\`|\`#${hex}\`|${color}|`;
    }
  })
  .on("close", () => {
    writeFile(exportFilePath, result, () => {
      console.log("FINISHED");
    });
  })
  .on("error", (error) => {
    throw error;
  });
