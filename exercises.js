// Question 1

function bubbleSort(arr) {
    const n = arr.length;

    // TODO: Implement the Bubble Sort algorithm

    return arr;
}

// Exercise: Sort the array using the bubbleSort function
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

// TODO: Call the bubbleSort function to sort the array

console.log("Sorted Array:", unsortedArray);

// Your task is to complete the implementation of the bubbleSort function. Use the Bubble Sort algorithm to sort the array in ascending order. Remember to swap elements when necessary and continue iterating through the array until it is fully sorted.



// Question 2:

function selectionSortWords(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // TODO: Find the index of the minimum word in the unsorted part

        // TODO: Swap the minimum word with the first unsorted word
    }

    return arr;
}

// Exercise: Sort the array using the selectionSortWords function
const unsortedWords = ["banana", "apple", "grape", "orange", "kiwi"];
console.log("Unsorted Words:", unsortedWords);

// TODO: Call the selectionSortWords function to sort the array

console.log("Sorted Words:", unsortedWords);


//Your task is to complete the implementation of the selectionSortWords function. Use the Selection Sort algorithm to sort the array of words in lexicographical order. Remember to find the index of the minimum word in the unsorted part and swap it with the first unsorted word.


// Question 3

function insertionSortWords(arr) {
    const n = arr.length;

    // TODO: Implement the Insertion Sort algorithm

    return arr;
}

// Exercise: Sort the array using the insertionSortWords function
const unsortedNewWords = ["javascript", "python", "c++", "ruby", "go"];
console.log("Unsorted Words:", unsortedWords);

// TODO: Call the insertionSortWords function to sort the array

console.log("Sorted Words:", unsortedWords);
