function sayHello() {
  console.log("Selamat sore!");
}

sayHello();
console.log("===========================");
//  =========================================== Dynamic
function greeting(greet) {
  console.log("Selamat " + greet + "!");
}

greeting("malam"); // Selamat malam!
greeting("pagi"); // Selamat pagi!
console.log("===========================");
//  =========================================== Dynamic ++, dan juga parameter diberi default value
function miaw(greet, name = "Bapak/Ibu") {
  console.log("Selamat " + greet + ", " + name + "!");
}

miaw("makan", "kucing");
