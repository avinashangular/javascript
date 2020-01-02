export function CyclicRotate(arr,n) {    
    for(let x = 0; x < n; x++){
          arr.unshift(arr.pop());
        
    }
    return arr;
}


let x = CyclicRotate([1,2,3,4,5],2);

console.log(x);