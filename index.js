var Kitten = require("./Kitten");
var Leg = require("./Leg");
var Toe = require("./Toe");

var meo1 = new Kitten("button", 10);
var leg1 = new Leg();
var leg2 = new Leg();
var leg3 = new Leg();
var leg4 = new Leg();

for (var i = 0; i < 5; i++) {
    var toe = new Toe();
    leg1.toes.push(toe)
}

meo1.legs.push(leg1);
meo1.legs.push(leg2);
meo1.legs.push(leg3);
meo1.legs.push(leg4);

// console.log(meo1);
console.log(meo1.legs[0].toes)
