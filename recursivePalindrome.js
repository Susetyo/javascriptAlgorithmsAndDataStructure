// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word){
  let originalWord = word;
  function helper(i){
    if(i.length == 0){
      return "";
    }

    let lastWord = i[i.length-1];
    let newWord = i.slice(0,i.length-1)
    return lastWord + helper(newWord);
  }

  let reverseWord = helper(word)

  return originalWord === reverseWord;
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
