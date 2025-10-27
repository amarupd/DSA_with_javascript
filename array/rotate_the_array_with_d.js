let arr = [1, 2, 3, 4, 5];

let d = 2;

let n = arr.length;

d = d % n; //handle where d>n


function reverse(start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

}


reverse(0, d - 1);  //[ 2, 1, 3, 4, 5 ]
console.log(arr);

reverse(d, n - 1); //[ 2, 1, 5, 4, 3 ]
console.log(arr);

reverse(0, n - 1); //[ 3, 4, 5, 1, 2 ]

console.log(arr);
