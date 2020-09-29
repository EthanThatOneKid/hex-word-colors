# Hex-Word-Colors

> A dictionary of words that can be written as hexadecimal numerals.

[**See the results!!**](experiment/reports/1601355040120.report.md)

## Experiment 🧪

I was curious if it was possible to write any words as a hexidecimal numeral that would be relavent to their actual color representation. For example, "ice" can be written as `#1ce` in hexadecimal and it coincidentally has an icy-blue color!

### Constraints

There are only so many letters that we have at our disposal to spell words.
Any digit (0-9) is a valid value, however.
Here are the available characters that valid hexadecimal numerals allow:

- Letters: `a`, `b`, `c`, `d`, `e`, `f`
- Numbers: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`

Since there are only 6 (hence _hex_ in "hexadecimal") letters available in hexcodes.
Here is how letters are mapped to numbers if necessary:

| Letter | Number |
| ------ | ------ |
| `g`    | `9`    |
| `i`    | `1`    |
| `l`    | `1`    |
| `o`    | `0`    |
| `s`    | `5`    |
| `t`    | `7`    |
| `z`    | `2`    |

Additionally, valid hexadecimal numerals can be notated with only either a length of 3 or 6. This means that words with only either 3 or 6 letters will be valid.

### Results

The resulting report can be found [here](experiment/reports)!
You can run the experiment yourself by following the instructions in the [`experiment` directory](experiment).

A common pattern occurs with pretty much all of the generated colors.
Most of them are very light, resembling pastel colors.
The reason why most of the colors are on the lighter side is because, since the hexidecimal numerals are made of mostly numbers, the value that the hexidecimal numeral represents is higher.
There are 3 parts of every hexidecimal numeral.
The first 2 digits represent the brightness of the red channel, the second two digits represent the brightness of the green channel, and the last 2 digits represent the brightness of the blue channel.
So, since there are, on average, higher digits in the hexidecimal numerals, the color representations appear brigher.

## Going Forward

Going forward, it would be cool to be able to see if any of the valid hexadecimal words semantically corresponds to a color. For example, For example, "ice" can be written as `#1ce` in hexadecimal and it coincidentally has an icy-blue color. A dataset like [this one](https://www.kaggle.com/rtatman/color-terms-dataset) on Kaggle would do the trick but this one is too small. When I find a solid dataset with that type of data, I will write another script that generates a report showing all the words that correspond with the correct hexadecimal color representation!

---

[![Buy me a Coffee](https://img.shields.io/badge/buy%20me%20a-coffee-%23FF813F)][bmac]

Scienced with <3 by [EthanThatOneKid][creator_site]

[creator_site]: http://ethandavidson.com/
[bmac]: http://buymeacoff.ee/etok
