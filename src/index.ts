/**
 * @example
 * const result = prioritySort<number>([1, 4, 2, 3], [3, 2]);
 * console.log(result); // output: [3, 2, 1, 4]
 *
 * const result2 = prioritySort([{ value: 1}, { value: 2 }, { value : 3 }], [2, 3, 1], x => x.value);
 * console.log(result2); // output: [{ value: 2 }, { value: 3 }, { value: 1 }]
 *
 * @export
 * @template T, K
 * @param {T[]} data
 * @param {K[]} priority
 * @param {(item: T) => K} [keyExtractor] - a function to extract object field
 * @returns {T[]}
 */
export default function prioritySort<T, K>(
  data: T[],
  priority: K[],
  keyExtractor?: (item: T) => K
): T[] {
  const priorityMap = new Map<K, number>();
  priority.forEach((item, index) => {
    priorityMap.set(item, index);
  });

  return data.sort((a, b) => {
    const aKey = keyExtractor ? keyExtractor(a) : (a as unknown as K);
    const bKey = keyExtractor ? keyExtractor(b) : (b as unknown as K);

    const aPriority = priorityMap.has(aKey) ? priorityMap.get(aKey)! : Infinity;
    const bPriority = priorityMap.has(bKey) ? priorityMap.get(bKey)! : Infinity;
    return aPriority - bPriority;
  });
}
