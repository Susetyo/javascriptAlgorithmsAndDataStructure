function averagePair(arr, num) {
    const length = arr.length - 1;
    let left = 0;
    let right = length;

    if (length == 0) return false;

    while (right > left) {
        const avg = (arr[right] + arr[left]) / 2;

        if (avg === num) return true;

        if (avg < num) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

// console.log((3 + 2) / 2);
