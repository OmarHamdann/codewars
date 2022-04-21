function squareOrSquareRoot(array) {
    return array.map(function(element) {
        return element % 2 === 0 ? element * element : Math.sqrt(element);
    });
    }
    
