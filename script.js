window.onload = function() {
    var mainImg = document.getElementById('Main');

    document.getElementById('TNOne').onclick = function() {
            mainImg.src = './images/image-product-1.jpg';
            //alert('one clicked');
    };
    document.getElementById('TNTwo').onclick = function() {
            mainImg.src = './images/image-product-2.jpg';
            //alert('two clicked');
    };

    document.getElementById('TNThree').onclick = function() {
        mainImg.src = './images/image-product-3.jpg';
        //alert('one clicked');
    };

    document.getElementById('TNFour').onclick = function() {
        mainImg.src = './images/image-product-4.jpg';
        //alert('two clicked');
    };
};