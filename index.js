{
    function Taco() {
        this.toppings = ["cheese"];
        console.log("new taco!");
    }

    // This is a function that is tagged to the taco prototype 
    Taco.prototype.make = function() {
        console.log("makey make make ~~~");
    }

    let myTaco = new Taco();
    let newTaco = new Taco();

    newTaco.make();
}