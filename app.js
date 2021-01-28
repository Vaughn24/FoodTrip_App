
///////////////// NAV BAR SCROLL EFFECT///////////////
window.addEventListener('scroll', function () {
    let header = document.querySelector('.navbar');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
////////////////////////////////////////////////////



///////////////// Add / Minus Button ///////////////
function addItemToCart(amount,foodname) {
    let qtfood = document.querySelector(`#quantity-${foodname}`);
    let qty = parseInt(qtfood.innerHTML,10);
    let sum = qty + amount;
    qtfood.innerHTML=sum;
}

function minItemToCart(amount,foodname){
    let qtfood = document.querySelector(`#quantity-${foodname}`);
    let qty = parseInt(qtfood.innerHTML,10);
    if(qty >= 1){
        let sum = qty - amount;
        qtfood.innerHTML=sum;
    }

}
////////////////////////////////////////////////////