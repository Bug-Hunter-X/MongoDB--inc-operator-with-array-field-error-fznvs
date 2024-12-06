```javascript
// Incorrect usage of $inc operator with an array field
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { 'myArray.$': 1 } });
```