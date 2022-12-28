var addCoffee = function(prevName, name){
    setTimeout(function(){
        coffeeMaker.next(prevName ? prevName + ", " + name: name)
    })
}

var coffeeGenerator = function * (){
    var espresso = yield addCoffee("", "에스프레소");
    console.log(espresso);
    var americano = yield addCoffee("", "아메리카노");
    
}