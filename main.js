
function counter() {
    let first = 0;
    let second = 1;
    let sum = 0;
    let output = [first, second];
    
  
    for (let i = 0; i < 8; i++) {
      sum = first + second;
      first = second;
      second = sum;
      output.push(second);
    }
    console.log(output);
  }
  
  counter();