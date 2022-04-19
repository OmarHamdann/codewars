function barista(coffees){
  let result=0;

    for(let i=0;i<coffees.length;i++){
        result+=coffees[i]+2+2;

        }
    return result;


  }

  console.log(barista([2,10,5,3,9]));
  console.log(barista([4,3,2]));

  