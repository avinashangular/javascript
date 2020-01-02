
export function RemoveDuplicateUsingSet(arr) {
    return new Set(arr);
}

export function RemoveDuplicateUsingReduce(arr) {
    return arr.reduce((pre, curr) => {
        if (pre.indexOf(curr) == -1) {
            return pre.push(curr);
        }
    },[])
}