function validAnagram(arg_one, arg_two) {
    let lenArgOne = arg_one.length;
    let lenArgTwo = arg_two.length;

    if (lenArgOne !== lenArgTwo) return false;

    let arrArgOne = [];
    let arrArgTwo = [];

    for (let i = 0; i < lenArgOne; i++) {
        arrArgOne.push(arg_one[i]);
        arrArgTwo.push(arg_two[i]);
    }

    let sortArgOne = arrArgOne.sort();
    let sortArgTwo = arrArgTwo.sort();

    let count = 0;
    for (let i = 0; i < lenArgOne; i++) {
        if (sortArgOne[i] == sortArgTwo[i]) count++;
    }

    if (count == lenArgTwo) return true;
    else return false;
}

// validAnagram('azz','aza') -> false
// validAnagram('abta','atab') -> true
