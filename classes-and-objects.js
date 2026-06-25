class Cat {

    constructor(voice,age){
        this.voice = voice;
        this.age = age;
    }

    speak() {
        console.log(`my voice is : "${this.voice} " and my age is ${this.age}`);
    }

}

const billu = new Cat("maha ladleee, meaw" ,2);
billu.speak();


const object = {
    voice : "meaw",
    
    call(){
        console.log(this.voice);
    }
}
object.call();