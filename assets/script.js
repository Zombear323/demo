// variable
var Peter = "peter";
// console log
console.log("text test " + Peter);
console.log(typeof Peter);
// array
var cheesez = ["mozza", "chedda", "parmazan", "goudah"];
// for loop
for (let index = 0; index < cheesez.length; index++) {
    const element = cheesez[index];
    console.log("yummy " + cheesez[index]);
}
// function scope
function pizzaparty(x, y) {
    var dog = "stanley";
    console.log("asdggfsafdsa " + x + " Pizza time " + y + " fvaszbvyuwbefuyh " + dog);
    return;
}
// runs function
pizzaparty(cheesez[0], cheesez[3]);
// push adds to array, slice makes new array from old, sort sorts by alpha, pop removes last element in array
// concat method joins arrays, toUpperCase makes all the letters in the string capital letters
// unshift method adds an element to the beginning of the array, split creats array using seperator
cheesez.push("brie");
cheesez.unshift("goat")
console.log(cheesez);
 
// objects can have multiple key values
var dog = {
    // primatives
    name: "stanley",
    age: 13,
    colour: "brown",
    dumb: true,
    // arrays
    leashes: ["old blue", "red walk"],
    // functions
    // this = default global object (scope?)
    poop: function () {
        console.log("pick up " + this.name + "'s poop")
    },
    walk: function () {
        console.log("time to walk " + this.name )
    }
};
// logs value
console.log(dog.name);
console.log(dog["dumb"]);
console.log(dog.leashes[0])
console.log(dog["leashes"][1])
// function from object
dog.walk();
dog.poop();

var hacker = document.getElementById("neko-hacker")
// selects all specified
var h1el = document.querySelectorAll("h1")
console.log(hacker)
hacker.style.color = "pink"
// n = child
for (let index = 0; index < h1el.length; index++) {
    // setAttribute to change element
    h1el[index].setAttribute("style", "font-size: 50px; color:green")
}

// practice timer
function timertest() {
    var count = 0;

    var countdown = setInterval(function () {
        if (cheesez[count] === undefined){
            clearInterval(countdown);
        } else {
            console.log("damn " + cheesez[count]);
            count++;
        }

    });
}
timertest();

 