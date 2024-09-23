## Priority Sort

priority-sort is a versatile utility that sorts an array of items based on a given priority order. This function supports sorting both primitive types and objects by allowing the extraction of keys from objects for comparison.

### Installation

`npm install priority-sort`

### Usage

```javascript
import prioritySort from "priority-sort";

const result = prioritySort(
  [1, 4, 2, 3], // the array to be sorted
  [3, 2] // the priority
);
console.log(result); // output: [3, 2, 1, 4]
```

Note that elements not in the priority sequence will keep the original order.

Also, you can specify a function to determine how to compare objects.

```javascript
import prioritySort from "./path/to/prioritySort";

const result = prioritySort(
  [{ value: 1 }, { value: 2 }, { value: 3 }],
  [2, 3, 1],
  (x) => x.value
);
console.log(result); // output: [{ value: 2 }, { value: 3 }, { value: 1 }]
```

### Lisence

MIT
