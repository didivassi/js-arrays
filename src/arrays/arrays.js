/**
 * Add the given item to the array
 */
const add = (arr, item) => {
    
     arr.push(item);
     return arr;
};

/**
 * Add the given item to the start of the array
 */
const prepend = (arr, item) => {
     arr.unshift(item);
     return arr;
};

/**
 * Remove the given item from the array
 */
const remove = (arr, item) => {
   return arr.filter((value, index) => value !== item);
    
};

/**
 * Find the index of the given item within the given array
 */
const findIndex = (arr, item) => {
    return  arr.indexOf(item);
};

/**
 * Sums all the items of an array
 */
const sum = (arr) => {
    return  arr.reduce((sum, item) => sum + item, 0);
};

/**
 * Concatenate the two arrays
 */
const concat = (arr1, arr2) => {
    return  arr1.concat(arr2);
};

/**
 * Compare the two arrays' content for equality
 */

const isEqual = (arr1, arr2) => {
    return  arr1.every((item, index) => item === arr2[index]);  
    
};

/**
 * Reverse the given array
 */
const reverse = (arr) => {
    return  arr.reverse();
};

/**
 * Insert an item in the array at the specific position
 */
const insert = (arr, item, index) => {
   arr.splice(index, 0, item);
   return arr;
};

/**
 * Fill a new created array with the given length with the given item
 */
const fill = (length, item) => {
  let arr = new Array(length).fill(item,0);

   return arr;

};

/**
 * Remove all the falsy values from the given array
 */
const compact = (arr) => {
     arr = arr.filter((value) => value);  
     return arr;
};

/**
 * Count the number of occurrences of an item in the given array
 */
const count = (arr, item) => {
   return arr.filter((value) => value===item).length;
};

/**
 * Multiply all the items on the array by the given number
 */
const multiply = (arr, number) => {
   return arr.map((item) => item * number); 
};

/**
 * Find all the duplicated items in the given array
 */
const findDuplicates = (arr) => {
    arr = arr.filter((value) => arr.filter(a =>a===value).length >1);
     return arr.filter((value, index) => arr.indexOf(value) === index);
  
};

/**
 * Find all the occurrences of a given item on the array
 */
const findAllOccurrences = (arr, item) => {
   
    let occurrences = [];
    arr.map((value, index) => {
        if(value === item){
            occurrences.push(index);
        }
    });
    return occurrences;
};

/**
 * Parse the params from the given url
 * An url example: 'www.mindswap.com?a=maria&b=2,3&c=joana'
 * Result should be: {
            a: maria,
            b: [2, 3],
            c: joana,
        }
 */
const parseParams = (url) => {
    let params = {};
    let urlParams = url.split('?')[1].split('&');

    const treat = (arg) => {
        if(parseInt(arg, 10)==arg) {
            return parseInt(arg, 10);
        }
        return arg;
    }
    urlParams.forEach((param) => {
       let arr = param.split('=');
       
       params[arr[0]] =  arr[1].indexOf(',') === -1 ?  treat(arr[1]): arr[1].split(',').map(item => treat(item));

    });
    return params;
  
};

module.exports = {
    add,
    prepend,
    remove,
    findIndex,
    sum,
    concat,
    isEqual,
    reverse,
    insert,
    fill,
    compact,
    count,
    multiply,
    findDuplicates,
    findAllOccurrences,
    parseParams,
};
