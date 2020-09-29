const { createInterface } = require("readline");
const { createReadStream, writeFile } = require("fs");

const wordsFilePath = `./src/data/words.txt`;
const exportFilePath = `./src/data/${new Date().valueOf()}.words.txt`;

let result = [];

const file = createInterface({
  input: createReadStream(wordsFilePath),
  output: process.stdout,
  terminal: false,
});

file
  .on("line", (line) => {
    if (line.length === 6 || line.length === 3) {
      result.push(line);
    }
  })
  .on("close", () => {
    writeFile(exportFilePath, result.join("\n"), () => {
      console.log("FINISHED", result.length);
    });
  })
  .on("error", (error) => {
    throw error;
  });
