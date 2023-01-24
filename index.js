function myEach(collection, callback) {
    let array = objectValues(collection);
    for(let item of array) {
        callback(item);
    }
    return collection;
}

function myMap(collection, callback) {
    let array = objectValues(collection);
    const result = [];
    for(let item of array) {
        result.push(callback(item));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let array = objectValues(collection);
    if(typeof(acc) == "undefined") {
        acc = array[0];
        for(let i = 1; i < array.length; i++) {
            acc = callback(acc, array[i], collection);
        }
    }
    else {
        for(let item of array) {
            acc = callback(acc, item, collection);
        }
    }
    return acc;
    
}

function myFind(collection, predicate)  {
    for(let item of collection) {
        if(predicate(item)) {
            return item;
        }
    }
}

function myFilter(collection, predicate) {
    let result = [];
    let array = objectValues(collection);
    for(let item of array) {
        if(predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

function mySize(collection) {
    let array = objectValues(collection);
    return array.length;
}

function myFirst(array, n) {
    return n ? array.slice(0,n) : array[0];
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
function objectValues(obj) {
    return Object.values(obj);
}