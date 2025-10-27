let arr = [2, 3, 4, 6, 9, 5, 8, 7, 1];


let n = arr.length;
let i = n - 2  //because we have to find last element so while doing n-1 we dont have hte last element succesor so we do n-2

while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
}

if (i >= 0) {
    let j = n - 1;
    while (arr[j] <= arr[i]) {
        j--
    }

    [arr[i],arr[j]]=[arr[j],arr[i]];
}

let left=i+1;
let right=n-1;


while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++;
    right--;
}

console.log(arr);

