# goit-js-hw-03

A small JavaScript homework project that contains three task modules demonstrating array manipulation and string formatting.

## Project Structure

- `index.html` — loads the task scripts in the browser
- `js/task-1.js` — slug generation from titles
- `js/task-2.js` — array concatenation with a maximum length
- `js/task-3.js` — array filtering with both `for` and `for...of` loops

## Task Details

1. `slugify(title)`
   - Converts a title to lowercase
   - Splits the string on spaces
   - Joins the words with hyphens

2. `makeArray(firstArray, secondArray, maxLength)`
   - Concatenates two arrays
   - Returns a new array truncated to the `maxLength`

3. `filterArray(numbers, value)` and `filterArray2(numbers, value)`
   - Returns numbers greater than `value`
   - Implements one version with a classic `for` loop and one version with `for...of`

## How to Run

1. Open `index.html` in a browser.
2. Open the browser console to see the script output.

## Notes

- The code uses ES modules via `type="module"` in the script tags.
- This repository is intended for learning basic JavaScript functions and array operations.
