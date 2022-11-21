function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
    unionSet.add(i);
    }
    return unionSet
    }
    
    const setA = new Set(['apple', 'mango', 'orange']);
    const setB = new Set(['grapes', 'apple', 'banana']);
    const result = union(setA, setB);
    document.write(result);
    