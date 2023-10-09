const arr = ["a","b","s","r","x"];

console.log("arr value:", arr[1]);


//concat() This method does not change the existing arrays, but instead returns a new array.
const arr1 = [1,2,3];
const arr2 = ['A','B','C'];
const arr3 =['x','y','z'];
const arr4 = [arr2.concat(arr1,arr3)];

console.log(arr4);
//
const num1 = [1,[2]];
const num2 = [4,[5,[6]]];
const numbers = num1.concat(num2);
console.log(numbers);
//modify the first element of num1
num1[1].push(3);
console.log(numbers);

//copyWithin() copies part of this array to another location in the same array and returns this array without modifying its length.
console.log([1, 2, 3, 4, 5].copyWithin(3));
//
const arrc = ['a','b','c','d','e','f'];
console.log(arrc.copyWithin(0, 2, 5,));

console.log(arrc.copyWithin(1, 3));

//every() tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const rakin = (value) => value < 70;

const array1 = [1, 30, 40, 29, 10, 50];
const array2 = [1, 30, 40, 29, 10, 99];

console.log(array1.every(rakin));
console.log(array2.every(rakin));

//filter()
const name =['rakin','robin','afifa','raj'];
const show = name.filter((name) => name.length >= 4);
console.log(show);

//
const bignum = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function showNum(num) {
    for (let x = 2; num > x; x++) {

    if (num % x ===0){
        return false
    }
}
return num > 1
}
console.log(bignum.filter(showNum));

//flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arrf = [0, [1,2], 3, [4, [5,[6,7]]]];

console.log(arrf.flat());
console.log(arrf.flat(Infinity));

//forEach() executes a provided function once for each array element.
const arrayf = ['a', 'b', 'c'];

arrayf.forEach((element) => console.log(element));

//indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
const food = ['Burger','Sandwich','Taco','Pizza','Burger'];

console.log(food.indexOf('Pizza'));
console.log(food.indexOf('Sandwich'));
console.log(food.indexOf('tea'));

//lastindexOf() returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log(food.lastIndexOf('Burger'));

//map()  creates a new array populated with the results of calling a provided function on every element in the calling array.
const arrmap = [1, 2, 3, 4];
const map1 = arrmap.map((x) => x + 2);
const map2 = arrmap.map((x) => Math.pow(x, 2));

console.log(map1);
console.log(map2);


//reduce() result of running the reducer across all elements of the array is a single value.
const person =[ 2, 4, 7, 8, 4];
const room = 1;
const totalPerson = person.reduce((empty,value) => empty + value, room);

console.log("total person:", totalPerson);

//reverse() reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const animal = ['cow', 'dog','cat'];
console.log(animal);
const reversed = animal.reverse();
// animal and reversed are both in reversed order ['cat','dog','Cow']
reversed[0] = 'cat';
console.log(animal);
console.log(animal[0]);

//slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

//some() tests whether at least one element in the array passes the test implemented by the provided function.
const fruit = ["apple","banana","mango"];

const eat = (nm) => nm = "apple";

console.log(fruit.some(eat));

//findIndex() returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const largNum = [5, 12, 8, 13, 150];

const isLargeNumber = (element) => element >= 44;

console.log(largNum.findIndex(isLargeNumber));