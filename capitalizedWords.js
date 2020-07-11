function capitalizedWords (arr,l=0) {
  // add whatever parameters you deem necessary - good luck!
  // console.log(arr.length-1)
  if(l === arr.length ){
      return;
  }else{
      arr[l] = arr[l].toUpperCase()
      capitalizedWords(arr,l+1)
  }

  return arr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words))
