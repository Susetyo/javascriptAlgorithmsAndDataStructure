function sameFrequency(numOne, numTwo) {
    let concatNum = `${numOne}${numTwo}`;

    if (`${numOne}`.length !== `${numTwo}`.length) return false;

    let arr = [];

    for (let i = 0; i < concatNum.length; i++) arr.push(parseInt(concatNum[i]));

    let sortArr = arr.sort();

    let left = 0;
    let right = 1;
    let len = sortArr.length;
    let count = 0;
    let same = len / 2;

    console.log(sortArr);

    while (right <= len) {
        if (sortArr[left] === sortArr[right]) {
            count++;
            left += 2;
            right += 2;
        } else {
            left++;
            right++;
        }
    }

    if (count === same) return true;

    return false;
}

// sameFrequency(3589578,5879385) -> true
// sameFrequency(182,281) -> true
// sameFrequency(34,14) -> false
