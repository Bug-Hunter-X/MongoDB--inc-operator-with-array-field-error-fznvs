```javascript
// Correct usage of $inc operator with array field using positional operator
db.collection('myCollection').updateOne({ _id: 1, 'myArray.2': {$exists: true} }, { $inc: { 'myArray.$[element]': 1 } }, { arrayFilters: [ { 'element': 2 } ] });
```