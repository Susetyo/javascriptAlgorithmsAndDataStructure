function countUniqueValues(input) {
    const arr = input;
    let i = 0;
    let j = 1;
    let l = input.length - 1;
    let res = 0;
    if (arr.length == 0) return 0;

    if (Array.isArray(arr)) {
        while (j <= l) {
            if (arr[i] === arr[j]) {
                j++;
            } else {
                let temp = arr[j];
                j++;
                i++;
                arr[i] = temp;
            }
        }

        return i + 1;
    } else {
        console.log("Please parameter must be array type");
    }
}

// countUniqueValues([-2,-1,-1,0,1]) -> 4
// countUniqueValues([]) -> false
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) -> 7
// countUniqueValues([1,1,1,1,1,2]) -> 2
