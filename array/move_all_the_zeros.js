let arr=[ 1,2,3,0,2,0,5,6,0,3,6,5,0,4,0,0,5,2,5,0,6]

let j=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        j++;
    }
}

console.log(arr);
