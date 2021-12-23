const fs = require('fs');

const data = fs.readFileSync('input.txt', 'UTF-8')
//fs.readFileSync('/dev/stdin', 'UTF-8') // NO URI / LINUX funciona assim

const lines = data.split(/\r?\n/)

while(lines.length > 1){ // eof

    let strUserInput =  lines.shift()
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

}
