export function KthSmallestElement(kth, arr){
    this.method1 = function(){
        return arr.sort((a,b)=> a - b).splice(kth - 1,1);
    }

    this.method2 = function(){
        return  Array.from(new Set(arr)).sort((a,b)=>a-b)[kth-1]
    }
    
}

var result = new KthSmallestElement(3,[7, 10, 4, 3, 20, 15]);
console.log(result.method2());