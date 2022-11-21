function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let i of setB) {
    if (setA.has(i)) {
    intersectionSet.add(i);
    }
    }
    return intersectionSet;
    }
    
    const setA = new Set(['apple', 'mango', 'orange']);
    const setB = new Set(['grapes', 'apple', 'banana']);
    const result = intersection(setA, setB);
    document.write(result);
    