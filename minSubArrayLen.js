function minSubArrayLen(arr, num) {
    const len = arr.length;
    let minSub = 2;
    let temp = 0;

    for (let i = 0; i < len; i++) if (arr[i] >= num) return 1;

    for (let i = 0; i < minSub; i++) temp += arr[i];

    if (temp >= num) return 2;

    let j = minSub;
    let left = temp;
    while (j <= len) {
        if (j == minSub) left = temp;
        temp = temp - arr[j - minSub] + arr[j];

        if (temp >= num) {
            return minSub;
        } else {
            if (j == len) {
                minSub++;
                temp = left + arr[minSub - 1];
                j = minSub;
            } else {
                j++;
            }
        }
    }

    return 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
