function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
    differenceSet.delete(i)
    }
    return differenceSet
    }
    const setA = new Set(['apple', 'mango', 'orange']);
    const setB = new Set(['grapes', 'apple', 'banana']);
    const result = difference(setA, setB);
    document.write(result);
    