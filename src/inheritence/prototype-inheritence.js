export var PrototypeInheritence = (function(){

function Persion(name){
    this.name = name;
}

Persion.prototype.walk = function(){
    console.log(`${this.name} is walking.`);
}


function Programmer(name,language) {
    Persion.call(this, name);
    this.programmingLanguage = language;
}

Programmer.prototype = Object.create(Persion.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.writeCode = function(){
    console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
}

var programmer1 = new Programmer('Avinash','JavaScript');
programmer1.walk();
programmer1.writeCode();
console.dir(Programmer);
console.dir(programmer1);
}());