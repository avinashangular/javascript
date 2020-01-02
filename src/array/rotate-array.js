

export function RotateArray(rotateCount, arr) {
    for (let i = 0; i < rotateCount; i++) {
         arr.push(arr.shift());         
    }

    return arr;
}

var rotate1 =  RotateArray(2, [1, 2, 3, 4, 5]);
console.log(rotate1);