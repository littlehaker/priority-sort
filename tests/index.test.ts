import prioritySort from "../src";

test("basic usage", () => {
  // Number
  expect(prioritySort([2, 1, 4, 5, 3, 2, 1], [2, 3, 1])).toEqual([
    2, 2, 3, 1, 1, 4, 5,
  ]);

  // String
  expect(
    prioritySort(
      ["baz", "some", "foo", "other", "bar", "string"],
      ["foo", "bar", "baz"]
    )
  ).toEqual(["foo", "bar", "baz", "some", "other", "string"]);
});

test("keyExtractor", () => {
  expect(
    prioritySort(
      [{ value: 1 }, { value: 2 }, { value: 3 }],
      [2, 3, 1],
      (x) => x.value
    )
  ).toEqual([{ value: 2 }, { value: 3 }, { value: 1 }]);
});
