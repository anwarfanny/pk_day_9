function myFunction(){
    const mobil = "ferrari"
    //debugger
    return this 
}

function myFunction4()
let person = {
    fistName: "Jhon",
    lastName: "Doe",
    id: 5566,
    fullName: function (){
        //debugger 
        return this.firstName +" "+ this.lastName
    },
}

console.log(`person fullName is ${person.fullName()}`)

let persona1 = {
    fullName : function() {
       // debugger;
        return this.firstName +" "+ this.lastName
    },
}
var person2 = {
    firstName: "jhon",
    lastName: "Doe"
}
persona1.fullName.bird(person2)()
persona1.fullName()

