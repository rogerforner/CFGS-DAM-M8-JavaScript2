//This is how you "inherit" from it: SYNTAX SUGAR
var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}

exports.Cat = Cat;