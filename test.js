let arr=[1,2,3,4,5];

let n = arr.length;

let i = n - 2;

while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
}

if (i >= 0) {
    let j = n - 1;

    while (arr[j] <= arr[i]) {
        j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
}


let left = i + 1;
let right = n - 1;


while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
}

console.log(arr);
