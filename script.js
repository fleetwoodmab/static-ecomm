/* Lightbox */

window.onload = function() {
    var mainImg = document.getElementById('Main');

    one.classList.remove("tn-active");
    two.classList.remove("tn-active");
    three.classList.remove("tn-active");
    four.classList.remove("tn-active");

    document.getElementById('one').onclick = function() {
            mainImg.src = './images/image-product-1.jpg';
            one.classList.add("tn-active");
            two.classList.remove("tn-active");
            three.classList.remove("tn-active");
            four.classList.remove("tn-active");
    };
    document.getElementById('two').onclick = function() {
            mainImg.src = './images/image-product-2.jpg';
            one.classList.remove("tn-active");
            two.classList.add("tn-active");
            three.classList.remove("tn-active");
            four.classList.remove("tn-active");

            
    };

    document.getElementById('three').onclick = function() {
        mainImg.src = './images/image-product-3.jpg';
        one.classList.remove("tn-active");
        two.classList.remove("tn-active");
        three.classList.add("tn-active");
        four.classList.remove("tn-active");

    };

    document.getElementById('four').onclick = function() {
        mainImg.src = './images/image-product-4.jpg';
        one.classList.remove("tn-active");
        two.classList.remove("tn-active");
        three.classList.remove("tn-active");
        four.classList.add("tn-active");

    };
};


/* Add and remove items */

function add()
{
    var amount = document.getElementById('amount');
    var number = amount.innerHTML;
    number++;
    amount.innerHTML = number;
}

function remove()
{
    var amount = document.getElementById('amount');
    var number = amount.innerHTML;
    number--;
    if(number <= 0) {
        number = 0;
    }
    amount.innerHTML = number;
}