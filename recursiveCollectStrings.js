let test = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj){
    let newObj = [];
    for(var k in obj){
        if(typeof obj[k]==="string"){
            newObj.push(obj[k]);
        }else if(typeof obj[k]==="object"){
            newObj = newObj.concat(collectStrings(obj[k]))
        }
    }

    return newObj;
}

console.log(collectStrings(test)) // ["foo", "bar", "baz"])
