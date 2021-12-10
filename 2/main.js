function maxNumber(){
    let largeNum = 0
    let maxNum = arguments[0]
    try{
        if( arguments.length === 0 ) {
            throw "Null"
        }

        for(let index = 0 ; index < arguments.length ; index++){ 
            if(typeof arguments[index] !== "bigint"){
                if(typeof arguments[index] !== "string"){
                    if( !Number.isInteger(arguments[index])){
                        throw "big error!"
                    }
                }
            } 
            if((BigInt(arguments[index]) >= 2**53) || arguments[index] === ""){
                throw "big error!"
            }else{ 
                largeNum = BigInt(arguments[index])
                if( largeNum >= maxNum ){
                    maxNum = largeNum
                }
            }
        }
        
        return maxNum
    }
    catch(error){
        return error
    }
    
}
// console.log(maxNumber(''))
// console.log(maxNumber())
// console.log(maxNumber(0n))
// console.log(maxNumber(1n, 10n, 5n))
// console.log(maxNumber("10", 5n, 1))
// console.log(maxNumber(2 ** 53 - 1))
// console.log(maxNumber(2 ** 53))
// console.log(maxNumber("10" / 3))
// console.log(maxNumber("10" / 2))
// console.log(maxNumber(10 - 12, 10 - 10, 10 - 11))
