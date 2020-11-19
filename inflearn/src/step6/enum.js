var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "NIKE";
    Shoes["Adidas"] = "ADIDAS";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Adidas;
console.log(myShoes);
