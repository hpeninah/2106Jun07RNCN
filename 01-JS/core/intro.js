//print Hello World
console.log("Hello World");

//this var holds the age
//you must be 13 years or older to sign up
const age = 12;

//check if it is
const overAge = (age >= 13);

if(overAge){
    console.log('The person is of age');
}
else {
    console.log('The person is underage');
}

const somthing = "cool"
if(somthing == "cool"){
    console.log('somthing is cool');
}
else if (somting === "not cool"){
    console.log("somthing is not cool");
}
else{
    console.error("somthing is wrong")
}

//for loop
for(let i = 0;i<10; i ++){
    console.log(i+' is not 10');
}