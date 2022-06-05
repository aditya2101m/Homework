function counter(){
    let first = 0
    let second = 1
    let sum = 0 
    let output = []
    
    for(let i=0; i<10;i++){
        output.push(first)
        output.push(second)
        sum = first + second
        first = second
        second = sum
        return second
    }
    console.log(output)

}

counter()