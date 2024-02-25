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
