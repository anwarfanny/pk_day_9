let greeting = "say hi"
console.log(greeting)
greeting ="say hello instead"
console.log(greeting)

let greeting1 = "say Hi"
let times = 4
if (times >3){
    let hello = "say hello instead"
    console.log(hello)
}
//console.log(hello)


//function
function myFunction(totalPrice, name){
    let totalTex = totalPrice * 0.1
    let detailTex = 'name ${name}, tex: ${totalTex}'
    return detailTex
}
console.log(myFunction(5,"apple"))

const funct = (totalPrice, name) =>{
    let totalTex = totalPrice *2.0
    let detailTex = 'name: ${name}, tex: ${totalTex}'

    return detailTex
}

console.log(funct(3, "water melon"))


let names = ["Budi", "joni", "Tono", "jaka"]
let modifiedName = names.map((name) =>{
    console.log("Mr," + name )
})

function myFunction1 (totalPrice, name){
    let totalTex = totalPrice *0.1
    let detailTex = 'name: ${name}, tex: ${name}'
    return detailTex
}

console.log(myFunction1(6,"nanas"))

function factorial(n, accumulator){
    if (n === 0){
        return accumulator
    }
    
    return factorial(n - 1, n * accumulator)
}
console.log(factorial(5, 1))
