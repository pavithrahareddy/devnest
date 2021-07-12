// 1. Write a JavaScript function to check whether an `input` is an array or not

function is_array(arr) {
  return Array.isArray(arr)
}
console.log(is_array('hey there!'))
console.log(is_array([1, 2, 4, 0]))

// 2. Write a JavaScript function to clone an array

function array_Clone(arr) {
  return [...arr]
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {
  if (Boolean(n) == false) {
    return arr[0]
  }
  return arr.slice(0, n)
}

console.log(first([7, 9, 0, -2]))
console.log(first([], 3))
console.log(first([7, 9, 0, -2], 3))
console.log(first([7, 9, 0, -2], 6))
console.log(first([7, 9, 0, -2], -3))

// 4. Write a simple JavaScript program to join all elements of the following array into a string.

function joinArray(arr, a) {
  return arr.join(a)
}

myColor = ['Red', 'Green', 'White', 'Black']
console.log(joinArray(myColor, ' '))
console.log(joinArray(myColor, ', '))
console.log(joinArray(myColor, ' + '))

// 5. Write a JavaScript program to find the most frequent item of an array

function maxRepeat(arr) {
  arr = arr.sort()
  count = 1
  max_count = 0
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++
    } else {
      //compare the count with max_count
      if (count > max_count) {
        //update if count is greater
        max_count = count
        element = arr[i - 1]
      }
      //reset count to 1
      count = 1
    }
  }
  return element + ' ( ' + max_count + ' times )'
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
console.log(maxRepeat(arr1))
