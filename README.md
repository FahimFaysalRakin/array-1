# Array-1
JavaScript Array is a single variable that is used to store elements of different data types.

## Array creat & show
```javascript
const arr = ["a","b","s","r","x"];

console.log("arr value:", arr[1]);
```
## Array concat()
This method does not change the existing arrays, but instead returns a new array.
```javascript
const arr1 = [1,2,3];
const arr2 = ['A','B','C'];
const arr3 =['x','y','z'];
const arr4 = [arr2.concat(arr1,arr3)];

console.log(arr4);
```
```javascript
const num1 = [1,[2]];
const num2 = [4,[5,[6]]];
const numbers = num1.concat(num2);
console.log(numbers);
//modify the first element of num1
num1[1].push(3);
console.log(numbers);

```
## Array copyWithin()
Copies part of this array to another location in the same array and returns this array without modifying its length.
```javascript
console.log([1, 2, 3, 4, 5].copyWithin(3));
```
```javascript
const arr = ['a','b','c','d','e','f'];
console.log(arr.copyWithin(0, 2, 5,));

console.log(arr.copyWithin(1, 3));
```
## Array every()
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```javascript
const rakin = (value) => value < 70;

const array1 = [1, 30, 40, 29, 10, 50];
const array2 = [1, 30, 40, 29, 10, 99];

console.log(array1.every(rakin));
console.log(array2.every(rakin));
```
## Array filter()
```javascript
const name =['rakin','robin','afifa','raj'];
const show = name.filter((name) => name.length >= 4);
console.log(show);
```
```javascript
const arr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function showNum(num) {
    for (let x = 2; num > x; x++) {

    if (num % x ===0){
        return false
    }
}
return num > 1
}
console.log(arr.filter(showNum));
```
## Array flar()
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
```javascript
const arrf = [0, [1,2], 3, [4, [5,[6,7]]]];

console.log(arrf.flat());
console.log(arrf.flat(Infinity));
```
## Array forEach()
Executes a provided function once for each array element.
```javascript
const arrayf = ['a', 'b', 'c'];

arrayf.forEach((element) => console.log(element));
```
## Array indexOf() & lastIndexof()
indexOf():- Returns the first index at which a given element can be found in the array, or -1 if it is not present.
lastIndexof():-Returns the last index at which a given element can be found in the array, or -1 if it is not present.
```javascript
const food = ['Burger','Sandwich','Taco','Pizza','Burger'];

console.log(food.indexOf('Pizza'));
console.log(food.indexOf('Sandwich'));
console.log(food.indexOf('tea'));
//lastIndexof
console.log(food.lastIndexOf('Burger'));

```
## Array map()
Creates a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
const arrmap = [1, 2, 3, 4];
const map1 = arrmap.map((x) => x + 2);
const map2 = arrmap.map((x) => Math.pow(x, 2));

console.log(map1);
console.log(map2);
```
## Array reduce()
Result of running the reducer across all elements of the array is a single value.
```javascript
const person =[ 2, 4, 7, 8, 4];
const room = 1;
const totalPerson = person.reduce((empty,value) => empty + value, room);

console.log("total person:", totalPerson);
```
## Array reverse()
Reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
```javascript
const animal = ['cow', 'dog','cat'];
console.log(animal);
const reversed = animal.reverse();
// animal and reversed are both in reversed order ['cat','dog','Cow']
reversed[0] = 'cat';
console.log(animal);
console.log(animal[0]); 
```
## Array slice()

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)
```
## Arrat some()
Tests whether at least one element in the array passes the test implemented by the provided function.
```javascript
const fruit = ["apple","banana","mango"];

const eat = (nm) => nm = "apple";

console.log(fruit.some(eat)); 
```
## Array findIndex()
Returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
```javascript
const largNum = [5, 12, 8, 13, 150];

const isLargeNumber = (element) => element >= 44;

console.log(largNum.findIndex(isLargeNumber));
```






