function isSubsequence(word, drow) {
    let l = drow.length - 1;
    let i = 0;
    let j = 0;
    let pair = "";

    while (j <= l) {
        if (word[i] == drow[j]) {
            pair += word[i];
            i++;
            j++;
        } else {
            j++;
        }
    }

    if (pair === word) return true;
    else return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
