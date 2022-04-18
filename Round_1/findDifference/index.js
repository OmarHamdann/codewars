function findUniq(arr) {
    let a = arr[0];
    let b = arr[1];
    
    if (a === b) {
        return a;
    }
    
    return a + b - arr[2];
    }