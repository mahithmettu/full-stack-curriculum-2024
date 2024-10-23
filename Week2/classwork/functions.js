// 1. Write a JavaScript program to find the longest string in a given array
function findLongestString(arr) {
  // Your code here
  let longest = "";
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// Test for findLongestString
const testArr1 = ["apple", "banana", "cherry", "date"];
console.log("Testing findLongestString:")
console.log("Expected: banana, Output: ", findLongestString(testArr1));

// 2. Write an arrow function that calculates the area of a rectangle
const calculateArea = (length, width) => {
  // Your code here
  return length * width;
};

// Test for calculateArea
console.log("\nTesting calculateArea:")
console.log("Expected: 20, Output: ", calculateArea(4, 5));

// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books:
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: false,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

function displayReadingStatus() {
  // Your code here
  for (var i = 0; i < library.length; i++) 
    {
     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
     if (library[i].readingStatus) {
       console.log("Already read " + book);
     } else
     {
      console.log("You still need to read " + book);
     }
    }
 
}

// Test for displayReadingStatus
console.log("\nTesting displayReadingStatus:")
displayReadingStatus();

// 4. Square the value of every element in an array, then print the result
function squareAndPrint(arr) {
  // Your code here
  for(int in arr) {
    console.log(int * int);
  }
}

// Test for squareAndPrint
const testArr2 = [1, 2, 3, 4, 5];
console.log("\nTesting squareAndPrint:")
squareAndPrint(testArr2);

// 5. Filter array to numbers greater than 5
function filterGreaterThanFive(arr) {
  // Your code here
  const result = [];
  for (const num of arr) {
    if (num > 5) {
      result.push(num);
    }
  }
  return result;
}

// Test for filterGreaterThanFive
const testArr3 = [3, 8, 1, 5, 9];
console.log("\nTesting filterGreaterThanFive:")
console.log("Expected: [8, 9], Output:", filterGreaterThanFive(testArr3));
