function oddsVsEvens(num) {
    let stringNum = num.toString();
   let numArr=stringNum.split('');
    var odds = [];
    var evens = [];
    let oddSum = 0;
    let evenSum = 0;

    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            evens.push(numArr[i]);
        }
        else {
            odds.push(numArr[i]);
        }
    }

    for (var i = 0; i < odds.length; i++) {
        oddSum += Number(odds[i]);
    }

    for (var i = 0; i < evens.length; i++) {
        evenSum += Number(evens[i]);
    }

   if (oddSum > evenSum) {
       return 'odd';
   }
    else if (oddSum <evenSum) {
        return 'even';
    }
    else {
        return 'equal';
    }

       
   }

    
  
  console.log(oddsVsEvens(463));