var person={
    name:"Prashant",
    age:20,
    email:"prashantadhav971@gmail.com",
hobbies:"cricket",
}
console.log(person)
person.location = "Pune"
console.log(person)
person["email"]="prashantadhav971@gmail.com"
console.log(person)
person.family={
  "father":{
  name:"Babasaheb",
  age:50,
  },
  "mother":{
    name:"Chandrakala",
    age:49,
  },
    "sibling":
      {
      name:"Mona",
      age:20,
    
      name:"Priya",
      age:21,
    }
}

console.log(person)


 const greet=function(name){
    console.log(name)
  }
person.greet=greet
console.log(person)


var person1=person
console.log(person1)


 var person2=JSON.parse(JSON.stringify(person1))
person2.age=25
 console.log(person2)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log("  ")
console.log(Object.entries(person))