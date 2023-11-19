function car(){
    var carLogo = localStorage.getItem('carBrandImageStored');
    document.getElementById('carimg').src = carLogo;

    var carBrand = localStorage.getItem('carBrandStored');
    var writeBrand = document.getElementById('car-brand');
    var carModel = localStorage.getItem('carModelStored');

    writeBrand.textContent = carBrand + ' ' + carModel;

    var carImg = localStorage.getItem('carImageStored');
    var carImg1 = localStorage.getItem('carImageStored1');
    var carImg2 = localStorage.getItem('carImageStored2');
    document.getElementById('pic1').src = carImg;
    document.getElementById('pic2').src = carImg1;
    document.getElementById('pic3').src = carImg2;

    var carPrice = localStorage.getItem('carPriceStored');
    document.getElementById('car-price').textContent = carPrice;
}

function buy()  {
    var siteBackground = document.getElementById('background');
    siteBackground.style.display = "block";
    var Alert = document.getElementById('alert');
    Alert.style.display = 'flex';
    var carBrand = localStorage.getItem('carBrandStored');
    var carModel = localStorage.getItem('carModelStored');
    var modelHolder = document.getElementById('car-model');
    var colorHolder = document.getElementById('car-color');
    var priceHolder = document.getElementById('total-price');
    var color = document.Form.color.value;
    var price = document.getElementById('car-price').textContent;
    var mazelTov = document.getElementById('boban');
    var details = document.getElementById('zoki');

    mazelTov.textContent= "We congratulate you on your recent purchase of the stunning " + carBrand + ' ' + carModel + " from Legendary Motorsport. Your choice of the color " + color + " truly adds a touch of elegance to this exceptional vehicle.";
    details.textContent="Here are the details of your purchase:";
    modelHolder.textContent = "Model: " + carBrand + ' ' + carModel;
    colorHolder.textContent = "Color: " + color;
    priceHolder.textContent = "Total Cost: " + price;

}

function ok()   {
    var Link = document.getElementById('next');
    Link.click()
}