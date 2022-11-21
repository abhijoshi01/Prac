function insertObject(arr, obj) {
    
    arr.push(obj);
    console.log(arr);
    }
    function checkObject(arr) {
    
    const result = Array.isArray(arr);
    if(result) {
    document.write(`[${arr}] is an array.`);
    }
    else {
    document.write(`${arr} is not an array.`);
    }
    }
   
    let array = [1, 2, 3];
    
    let object = {x: 12, y: 8};
    
    checkObject(object);
   
    insertObject(array, object);
    