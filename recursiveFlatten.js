function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let res = [];

  function helper(a){
    if(a.length == 0){
      return false;
    }

    if(Array.isArray(a[0])){

      let  l = a.length;
      if(l == 1){
         helper(a[0])
      }else{
        for(let i = 0; i< l; i++){
            helper(a[i])
        }
      }


    }else{

      res.push(a[0])
      helper(a.slice(1))
    }
  }

  helper(arr)

  return res;

}
console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]] ] ]))
console.log(flatten([[1],[2],[3]]) )
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
