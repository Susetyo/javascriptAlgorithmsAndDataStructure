function capitalizeFirst(array){
    let newArr = [];

    function helper(words){
       if(words.length == 0){
            return false;
       }else{
            let word = words[0];
            let newWord = "";
            for(let i=0; i < word.length;i++){
                if(i == 0){
                    newWord += word[i].toUpperCase();
                }else{
                    newWord += word[i];
                }
            }

            newArr.push(newWord);

            helper(words.slice(1));
       }
    }

    helper(array);

    return newArr;

}

console.log(capitalizeFirst(['car','taco','banana']));
