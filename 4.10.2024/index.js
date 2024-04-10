//exserciese 1  Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1

const arr = [-5, -2, -6, 1, -1]
let bigNumber=arr[0]
for(let i=0; i<arr.length; i++){
if(arr[i]>bigNumber){
    bigNumber=arr[i]
}
}
console.log(bigNumber)


//exsercise 2 2. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
//it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even

for (let a = 0; a <= 15; a++) {
    if (a === 0) {
        console.log(a + "is even");
    }
    else if (a % 2 === 0) {
        console.log(a + 'is even')
    }
    else {
        console.log(a + 'is odd')
    }
}

//exsercise 3 Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) {
    return a - b;
});

console.log(arr1.join(','));

//exsercise 4 Write a JavaScript program to find the most frequent item in an array.Sample array :
//  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let quantity = {};

arr2.forEach(function (item) {
    if (quantity[item]) {
        quantity[item]++;
    } else {
        quantity[item] = 1;
    }
});

let maxQuantity = 0;
let mostQuantityItem;
for (let item in quantity) {
    if (quantity[item] > maxQuantity) {
        maxQuantity = quantity[item];
        mostQuantityItem = item;
    }
}
console.log(mostQuantityItem + " ( " + maxQuantity + " times )");

//exserciese 5 Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

const a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (let i = 0; i < a.length; i++) {
    console.log("row " + i);
    for (let b = 0; b < a[i].length; b++) {
        console.log(" " + a[i][b]);
    }
}


//exserciese 6 Write a JavaScript function to remove a specific element from an array.Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


function remove_array_element(arr, element) {
    let index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
console.log(remove_array_element([2, 5, 9, 6], 5));

//exserciese 7 დაწერეთ ფუნქცია რომელიც ალერტით გამოიტანს ვინდოუს სიგანეს და სიმაღლეს


function displayWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    alert("Window width: " + width + ", Window height: " + height);
}
displayWindowSize();

//exserciese 8 შექმენით ღილაკი რომლის ქლიქზე დარეფრეშდება ფეიჯი

document.getElementById('reset').addEventListener('click', function () {
    location.reload();
});