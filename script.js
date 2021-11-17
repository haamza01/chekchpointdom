var plus_btn = document.getElementsByClassName(plus_btn)
var span = document.getElementsByClassName(span)
var minus_btn = document.getElementsByClassName(minus_btn)

console.log(plus_btn)
console.log(span)
console.log(minus_btn)

var span = document.querySelector(".span")
console.log(span)

var plus_btn = document.querySelector(".plus_btn");

var span = document.querySelector(".span")

console.log(span)

console.log(span.innerHTML)


plus_btn.addEventListener("click", function() {
    plus_btn.nextElementSibling.innerHTML++;
    Total()

});


var minus_btn = document.querySelector(".minus_btn");

minus_btn.addEventListener("click", function() {
    if (minus_btn.previousElementSibling.innerHTML > 0)
        minus_btn.previousElementSibling.innerHTML--;
    Total()
});
var prixu = document.getElementsByClassName(prixu)
var utotal = document.getElementsByClassName(utotal)
var nprix = document.getElementsByClassName(nprix)




// plus_btn = document.getElementById('plus_btn')
// minus_btn = document.getElementById('minus_btn')
// plus.addEventListener("click", (e) => {

//     Total = document.getElementById('#Total')
//     Qtn.innerHTML++
//         Total.innerHTML = Qtn.innerHTML * 5000
// })

function Total() {

    var Qtn = document.getElementById('Qtn')
    var total = document.getElementById("utotal")
    var sum = 0
    sum = sum + Qtn.innerHTML * 5000

    total.innerHTML = sum
}