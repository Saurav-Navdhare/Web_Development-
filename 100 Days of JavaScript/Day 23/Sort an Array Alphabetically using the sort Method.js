function alphabeticalOrder(arr) {
    // Only change code below this line
    arr.sort(function (a, b) { return a === b ? 0 : a < b ? -1 : 1 })
    return arr
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method