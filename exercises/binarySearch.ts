/*
Binary Search: Write a function that takes a sorted array of integers and a target value as input and returns the index of the target value in the array,
or -1 if the target value is not found. For example, if the input is [1, 3, 5, 7, 9] and 5, the output should be 2 (the value 5 is at index 2 in the array).
*/

// I had to do some weird stuff with math.floor and max
// So maybe we should look at how others do this exercise

const binarySearch = (list: number[], target: number) => {
  let pivot = Math.floor(list.length / 2);
  let low = 0;
  let high = list.length - 1;

  let securityCounter = 0;

  while (low < high && securityCounter < 100) {
    console.log("PIVOT: " + pivot);
    console.log(`LOW: ${low} -- HIGH: ${high}`);

    const currentNumber = list[pivot];

    if (currentNumber === target) return pivot;

    if (currentNumber < target) {
      low = pivot;
      pivot = Math.max(Math.floor((high - low) / 2), 1) + low;
    } else {
      high = pivot;
      pivot = Math.floor((high - low) / 2) + low;
    }

    securityCounter++;
  }

  console.log(securityCounter);

  return -1;
};

const input = [1, 3, 5, 7, 9];
console.log(binarySearch(input, -10));
