/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

https://leetcode.com/problems/container-with-most-water/description/
*/

const contWithMostWater = (heights: number[]) => {
  if (heights.length <= 2 || heights.length >= 1000)
    throw new Error(
      "The quantity of heights should be between 2 and 1000 inclusive"
    );

  let maxCapacity = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    const heightA = heights[i];

    for (let j = i + 1; j < heights.length; j++) {
      const heightB = heights[j];
      const maxHeight = Math.min(heightA, heightB);
      const wallDistance = j - i;

      const capacity = wallDistance * maxHeight;

      if (capacity >= maxCapacity) maxCapacity = capacity;
    }
  }

  return maxCapacity;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(contWithMostWater(input));
