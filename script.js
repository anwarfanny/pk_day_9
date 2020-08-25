//axios
axios
.get("'https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log("wrong URL")
})

//numeral
let myNumeral = numeral(1000)
let value = myNumeral.value()
console.log(value)

let myNumeral2 = numeral("100")
let value = myNumeral2.value()
console.log(myNumeral2)

//moment
let time = moment().format("MMMM Do YYY, h:mm:ssa")
console.log(time)
let data = new Date()
console.log(date)