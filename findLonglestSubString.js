function findLongestSubstring(str) {
    let words = 0;
    let start = 0;
    let temp = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (temp[char]) {
            start = Math.max(start, temp[char]);
        }
        temp[char] = i + 1;
        words = Math.max(words, i - start + 1);
    }

    return words;
}

// console.log(findLongestSubstring("bbbbb"));
// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("thisisawesome"));
// console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thecatinthehat"));
