# MongoDB $inc Operator with Array Field Error

This repository demonstrates a common error when using the `$inc` operator with array fields in MongoDB.  The provided `bug.js` file shows the incorrect implementation, while `bugSolution.js` presents the correct approach.

## Problem

The `$inc` operator is designed to increment numeric values. However, attempting to use it directly with an array element using the dot notation (e.g., `myArray.$`) will not work as expected and will often throw an error or produce unexpected results.

## Solution

The correct way to increment a specific element within an array involves using the positional operator (`$[]`) with the `$inc` operator within an update operation's filter and update stages. See `bugSolution.js` for a corrected example.