function areThereDuplicates() {
    let arr = [];
    const len = arguments.length;

    for (let i = 0; i < len; i++) {
        arr.push(arguments[i]);
    }

    arr.sort();

    let i = 0;
    let j = 1;

    while (j <= len) {
        if (arr[i] == arr[j]) {
            return true;
        } else {
            i++;
            j++;
        }
    }

    return false;
}

areThereDuplicates(1, 2, 3); //->false
areThereDuplicates(1, 2, 2); //->true
areThereDuplicates("a", "b", "d", "z", "b"); //->true
