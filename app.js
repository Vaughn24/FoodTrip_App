
///////////////// NAV BAR SCROLL EFFECT///////////////
window.addEventListener('scroll', function () {
    let header = document.querySelector('.navbar');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
////////////////////////////////////////////////////



///////////////// Add / Minus Button ///////////////
function addItemToCart(food,amount) {
    let btn_counter = true
    if(document.querySelector("#cart-btn").textContent == "+"){
        document.getElementById("cart-btn").style.padding = "5px 14px"
        document.getElementById("cart-btn").style.backgroundColor = "#d6504b"
        document.getElementById("cart-btn").innerHTML = "-";
    }
    else if(document.querySelector("#cart-btn").textContent == "-"){
        document.getElementById("cart-btn").innerHTML = "+";
        document.getElementById("cart-btn").style.padding = "5px 11px"
        document.getElementById("cart-btn").style.backgroundColor = "#44c767"

        
    }

}
////////////////////////////////////////////////////

function addItemToCart(food,amount) {


}