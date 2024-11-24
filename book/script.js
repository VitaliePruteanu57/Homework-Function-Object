function addStringArray(str,num){
    const result=[];
    for(let i=0;i<num;i++){
        result.push(str);
    }
    return result;
}
console.log(addStringArray("dog",6));