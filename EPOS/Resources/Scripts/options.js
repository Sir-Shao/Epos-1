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

    var carBrand = localStorage.getItem('carBrandStored');
    var writeBrand = document.getElementById('car-brand');
    var carModel = localStorage.getItem('carModelStored');

    writeBrand.textContent = carBrand + ' ' + carModel;

    var color = document.Form.color.value

    var price = document.getElementById('car-price').textContent

    alert("Receipt:\n\n\nModel: " + writeBrand.textContent +
          "\n\n\nColor: " + color + 
          "\n\n\nTotal: " + price)

    var Link = document.getElementById('next')

    Link.click()
}