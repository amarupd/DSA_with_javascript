let arr=[32,25,60,45,50,59,58,54,875]

let secondLargest=-1;
let largest=-1;

for(let num of arr){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }
    if(num>secondLargest && num<largest){
        secondLargest=num;
    }
}

console.log(secondLargest);
//output: 60