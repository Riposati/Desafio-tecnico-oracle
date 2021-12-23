let strUserInput =  "ABCDEF"
let strFront = [], strBack = []
let aux = strUserInput.length
let aux2 = aux

for(let i=0;i<strUserInput.length;i++){

    while(aux2 > 0){
        strFront.push(strUserInput[i])
        strBack.push(strUserInput[i])
        aux2--
    }    
    aux2 = --aux
}

strBack = strBack.reverse()
strBack.splice(0,1)

strBack = strBack.join(",")
strFront = strFront.join(",")

console.log(strFront.concat(",", strBack))
