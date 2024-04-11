let numbers = [1,2,3,4,5]

// Add an element at the end of the array
numbers.push(6)

//Loop on all array elements
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Access to the array element with its index
let index = 2;
console.log("Element at index", index, ":", numbers[index]);

//Remove an array element with its index
let removedElement = numbers.splice(3, 1); // Xóa phần tử thứ tư
console.log("Removed element:", removedElement);
console.log("Updated array:", numbers);

//Filter array elements
let filteredArray = numbers.filter((element) => element % 2 === 0); // Lọc ra các số chẵn
console.log("Filtered array:", filteredArray);

// Transform each array element by applying a function on them
let transformedArray = numbers.map((element) => element * 2); // Nhân mỗi phần tử với 2
console.log("Transformed array:", transformedArray);

