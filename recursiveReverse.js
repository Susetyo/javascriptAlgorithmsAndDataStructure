function reverse(word){
  if(word.length == 0){
    return ""
  }

  let lastWord = word[word.length-1];
  let newWord = word.slice(0,word.length-1)

  return lastWord + reverse(newWord);
}
