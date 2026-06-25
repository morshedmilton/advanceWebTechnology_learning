// regular function
function deleted(a,b){
    return a-b;
}
let a= deleted(10,5);
console.log(a);


// arrow function

const add= function(a,b){
    console.log(a+b);
}
add(10,20);

//jodi single parameter hoy
const multiply=a=>{console.log(a*10);};
multiply(10);


//multiple statement thakle
const division = function(a,b){
    if(a <=0 || b<=0){
        console.log("invalid input");
    } else {
        return a/b;
    }}
 
    let r = division(10,2);
    console.log(r);



// ===============================================
// default parameter
// ================================================

const dpara = function(name = "nahin"){
    console.log(`hello ${name}`);
}
dpara();
dpara("jahid");


// ===============================================
// "this" in Arrow Functions
// ================================================

const object = {
    name: "nahin",
    age: 20,

normalfunction : function (){
    console.log(this.name, this.age);
},

arrowfunction : () => {
    console.log(this.name, this.age); //arrow function er moddhe "this" keyword er value undefined hobe. karon arrow function er moddhe "this" keyword er value parent scope theke nibe. ar parent scope er moddhe "this" keyword er value undefined hobe.  
}

}
object.normalfunction();
object.arrowfunction();