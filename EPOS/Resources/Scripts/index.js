function car(n){
    var carNumber = n;
    localStorage.setItem('carNumber', carNumber);

    switch(n){
        case 1: 
            var brand = document.getElementById('car1brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var model = document.getElementById('car1model').textContent;
            localStorage.setItem('carModelStored', model);

            var imageUrl = document.getElementById('car1img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car1img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car1img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car1price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car1brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 330 km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h - 3.2s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 31 m ";
            localStorage.setItem('brakingStored', braking);

            var carText = "Few supercars actually get driven daily, but the 2023 Audi R8 seems designed for such a task. It offers a reasonably easy-going ride along with its breakneck acceleration. The R8 shares its underpinnings and its powertrain - a mighty V-10 and seven-speed automatic with the wild Lamborghini Huracan. The Audi is less hardcore than the Lambo, though, less intense on a twisty road or racetrack. What the R8 offers instead is a level of refinement that's more in line with the rest of the Audi lineup. Its snug, two-seat cabin is lined with high-end materials and features a minimalist design that forgoes the usual center-mounted infotainment display in favor of a digital gauge display that serves both purposes. The interior is comfortable for both driver and passenger, and the R8 would make a fine touring car if it weren't for a puny cargo area that fits only one carry-on suitcase. If this particular cross-section of performance and luxury appeals to you, now's the time to act, as this is the final year for Audi's V-10-powered showpiece.";
            localStorage.setItem('carTextStored', carText);
            
            break;
        case 2: 
            var brand = document.getElementById('car2brand').textContent;
            localStorage.setItem('carBrandStored', brand);

            var carName = document.getElementById('car2model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car2img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car2img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car2img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car2price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car2brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 325 km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h - 3.2s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 28 m";
            localStorage.setItem('brakingStored', braking);

            var carText = "AMG threw every racing trick in the book at the GT Black Series. The glass is lighter. Carbon fiber is strewn everywhere, including a 328-foot thread tying together the transmission's metal fastening points. There's a wing on the wing. As international bureau chief Angus MacKenzie said after attending the Black's launch, 'It's a race car for the road'. This is both great and also, weirdly, not so great. On the winding road at the Hyundai Proving Ground, the GT Black was by far the most impressive car we drove. Best handling? Sweetest? To some, not others, but mein gott were we collectively floored by how athletic and dominant this machine is.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 3: 
            var brand = document.getElementById('car3brand').textContent;
            localStorage.setItem('carBrandStored', brand);

            var carName = document.getElementById('car3model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car3img').src;
            localStorage.setItem('carImageStored', imageUrl);
            
            var imageUrl1 = document.getElementById('car3img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car3img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car3price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car3brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 305km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -3s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 32m";
            localStorage.setItem('brakingStored', braking);

            var carText = "The 2024 BMW M8 combines some baffling specs. It's as heavy as a Ford F-150, it's quicker to 60 mph than a Ferrari F8 Tributo, it rips through the quarter-mile in the same time as a Chevrolet Corvette Z06, and it does all of this with a back seat and an implacable luxury poise those others don't possess. Admittedly, the back seat isn't practical for full-grown humans. Even so, the M8's soothing cabin is one of the best places to experience what bodacious power delivery and all-wheel-drive traction can achieve together. Available as either a coupe or convertible (the four-door M8 Gran Coupe sedan is reviewed separately), the M8 represents the kind of comprehensively capable luxury GT we're more used to seeing with an Aston Martin or Bentley badge and a far heftier price.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 4: 
            var brand = document.getElementById('car4brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car4model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car4img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car4img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car4img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car4price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car4brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 295 km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h - 3.1s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 28m";
            localStorage.setItem('brakingStored', braking);

            var carText = "Sports-car specialist Porsche has been crafting impossibly delicious 911 models for decades, but the 2024 911 GT3 and GT3 RS models are its most uncompromised and outrageously quick versions to date. These track-day champs are powered by a naturally aspirated 4.0-liter six-cylinder engine that howls to a 9000 rpm redline. In GT3 guise, the flat-six makes 502 horsepower, but go for the GT3 RS or S/T and it gets juiced to 518 ponies. Parked next to a standard 911, the GT3 models look like entirely different cars, especially the RS, which wears wild aero elements including a giant rear wing. They look like they belong on a race track because they do. The regular 911 is no slouch when it comes to driving enjoyment, but the GT3 models are sharper, quicker, and more intense in every possible way. But that's not to say they're too unrefined for road use. Quite the opposite, especially for the Touring model, which makes this ultimate 911 a car that you can comfortably drive to Whole Foods or take on a road trip. We can't imagine a cooler way to travel.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 5: 
            var brand = document.getElementById('car5brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car5model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car5img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car5img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car5img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car5price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car5brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 250km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -5.9s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 32m";
            localStorage.setItem('brakingStored', braking);

            var carText = "With smooth styling with a ride to match, the two-row Audi Q8 is a dramatized version of the boxier Q7 three-row SUV. They both use the same solid underpinnings, including a turbocharged 335-hp V-6 engine, eight-speed automatic, and all-wheel drive, but the Q8's starting price is significantly higher. The Q8's chassis and acceleration are a mix of sweet and spicy, but this luxury SUV isn't shy about gulping down fuel. Much like other sporty-shaped SUVs, such as the BMW X6 or Mercedes-Benz GLE-class Coupe, the Q8 puts comfort first, with a plush interior and high-tech helm. A 500-hp SQ8 and even wilder 591-hp RS Q8 are also available, but we review each of those high-power versions separately.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 6: 
            var brand = document.getElementById('car6brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car6model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car6img').src;
            localStorage.setItem('carImageStored', imageUrl);
            
            var imageUrl1 = document.getElementById('car6img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2= document.getElementById('car6img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);

            var price = document.getElementById('car6price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car6brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 250km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -5.5s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 34m";
            localStorage.setItem('brakingStored', braking);

            var carText = "Numbers are a funny thing, and in the realm of BMW nomenclature, the X5 SUV is actually a bigger and more practical barge than the sloped-roof X6. In many ways, the X6 behaves like a thick 3-series in high heels. Powered by either a 335-hp inline-six engine (40i) or a feistier 523-hp twin-turbo V-8 (M50i), the X6 deploys power with the same smoothness of shaving cream. For more power, seek the X6 M with up to 617 horsepower (reviewed separately). Although the X6’s exterior proportions look misshapen, the interior is elegant and functional. The fashionably slanted roof sacrifices some headroom and storage space, but those who prefer its striking looks above all else are unlikely to mind its higher price tag over the X5.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 7: 
            var brand = document.getElementById('car7brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car7model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car7img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car7img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car7img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car7price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car7brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 272km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -4.3s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 33m";
            localStorage.setItem('brakingStored', braking);

            var carText = "More than a few compact luxury SUVs are dull little things but the Porsche Macan is one of only a handful that prove daring and exciting to drive. Despite its rather shed-like shape, the Macan embodies plenty of Porsche sports-car characteristics. The base Macan comes with a 261-hp turbocharged 2.0-liter inline-four engine that generates a respectable amount of zip. Macan S gets a 375-hp twin-turbo V-6 that delivers a significant leap in performance, making it the second mightiest of the Macan line before deferring to the more furious 434-hp Macan GTS—which we review separately. The Macan’s steering and ride make carving through challenging twisty roads as easy as slicing soft butter, thanks to a chassis designed for performance over cargo space. It’s unmatched in terms of driving feel. So, while the boxier BMW X3 M will carry more luggage, the Macan carries more of what enthusiasts crave: pure driving soul.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 8: 
            var brand = document.getElementById('car8brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car8model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car8img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car8img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car8img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car8price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car8brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 300km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -4.8s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 31m";
            localStorage.setItem('brakingStored', braking);

            var carText = "Ultimate luxury cars such as the 2023 Mercedes-Maybach S-class offer the world's wealthiest a place to rest their weary heads on the commute between their rooftop helipad and their Hamptons estate. These ultra-high-net-worth individuals can choose between twin-turbo V-8 or V-12 powertrains and indulge in a supremely spacious and superbly posh cabin. Believe it or not, the Maybach's styling is rather subtle compared to flashier entrants in the ultra-luxury category, including the blinged-out Rolls-Royce Phantom and Ghost. This more subdued look allows the S-class to navigate through traffic without drawing unwanted attention, which is something you want if you're a particularly camera-shy billionaire. The rear seat is the place to be, especially if the S-class is equipped with optional reclining and massaging VIP seats. But Maybach takes care of the chauffeur, too, with fine leather upholstery, a comfortable driving position, and a host of high-tech infotainment features.";
            localStorage.setItem('carTextStored', carText);
            break;
        case 9: 
            var brand = document.getElementById('car9brand').textContent;
            localStorage.setItem('carBrandStored', brand);
            
            var carName = document.getElementById('car9model').textContent;
            localStorage.setItem('carModelStored', carName);

            var imageUrl = document.getElementById('car9img').src;
            localStorage.setItem('carImageStored', imageUrl);

            var imageUrl1 = document.getElementById('car9img1').src;
            localStorage.setItem('carImageStored1', imageUrl1);

            var imageUrl2 = document.getElementById('car9img2').src;
            localStorage.setItem('carImageStored2', imageUrl2);
            
            var price = document.getElementById('car9price').textContent;
            localStorage.setItem('carPriceStored', price);
            
            var logoUrl = document.getElementById('car9brandImg').src;
            localStorage.setItem('carBrandImageStored', logoUrl);

            var topSpeed = "Top speed - 287km/h";
            localStorage.setItem('topSpeedStored', topSpeed);

            var acceleration = "Acceleration from 0 - 100 km/h -3s";
            localStorage.setItem('accelerationStored', acceleration);

            var braking = "Braking distance from 100 - 0 km/h - 30m";
            localStorage.setItem('brakingStored', braking);

            var carText = "When Porsche plasters the word “Turbo” on a vehicle, it’s company code for “high-performance model.” In the case of the firm’s sleek four-door hatchback Panamera sedan there are two Turbo models that punch the performance into apex-predator territory: the Panamera Turbo S and Turbo S E-Hybrid (we review Panamera Sport Turismo wagon separately). The Turbo S is propelled by a twin-turbo 4.0-liter V-8 pumping out 620 horsepower and 604 pound-feet of torque; the Turbo S E-Hybrid also uses a twin-turbo V-8 of 4.0 liters that’s been strapped to an electric motor yielding a combined 689 ponies and 641 pounds of twist. Both powertrains are mated to an eight-speed dual-clutch automatic transmission and all-wheel drive, and both can rocket the sedan to 60 miles per hour in under 3 seconds. Buyers can also have either configuration in Executive guise, which stretches the wheelbase by six inches, giving rear passengers limo-like space. The Panamera Turbo twins are up against some feisty competitors that offer similar day-to-day usability and similar adrenaline spikes: the Cadillac CT5-V Blackwing, which offers a manual transmission and is nearly half the price; and the Audi RS7, which can still snap off sprints to 60 mph in 3 seconds yet costs significantly less.";
            localStorage.setItem('carTextStored', carText);
            break;
    }
}

function display(n) {


    switch(n)   {
        case 1:
            var box = document.getElementsByClassName('car');
            for (var i=0; i < box.length; i++){
                if (box[i].style.display = "none") {
                    box[i].style.display = "flex";
                }
            }
            break;
        case 2:
            var box = document.querySelectorAll('.bmw, .mercedes, .porsche');
            var newBox = document.getElementsByClassName('audi');
            for (var i=0; i < box.length; i++){
                if (box[i].style.display !== "none")    {
                    box[i].style.display = "none"
                }
            }
            for (var i=0; i < newBox.length; i++){
                if (newBox[i].style.display = "none")   {
                    newBox[i].style.display = "flex";
                }
            }
            break;
        case 3:
            var box = document.querySelectorAll('.audi, .mercedes, .porsche');
            var newBox = document.getElementsByClassName('bmw');
            for (var i=0; i < box.length; i++){
                if (box[i].style.display !== "none")    {
                    box[i].style.display = "none"
                }
            }
            for (var i=0; i < newBox.length; i++){
                if (newBox[i].style.display = "none")   {
                    newBox[i].style.display = "flex";
                }
            }
            break;
        case 4:
            var box = document.querySelectorAll('.audi, .bmw, .porsche');
            var newBox = document.getElementsByClassName('mercedes');
            for (var i=0; i < box.length; i++){
                if (box[i].style.display !== "none")    {
                    box[i].style.display = "none"
                }
            }
            for (var i=0; i < newBox.length; i++){
                if (newBox[i].style.display = "none")   {
                    newBox[i].style.display = "flex";
                }
            }
            break;
        case 5:
            var box = document.querySelectorAll('.audi, .mercedes, .bmw');
            var newBox = document.getElementsByClassName('porsche');
            for (var i=0; i < box.length; i++){
                if (box[i].style.display !== "none")    {
                    box[i].style.display = "none"
                }
            }
            for (var i=0; i < newBox.length; i++){
                if (newBox[i].style.display = "none")   {
                    newBox[i].style.display = "flex";
                }
            }
            break;
    }
}

/* SORTIRANJE */


document.addEventListener("DOMContentLoaded", function () {

    function sortCars(order) {
      const carContainer = document.querySelector('.flex');
      const cars = Array.from(carContainer.querySelectorAll('.car'));
  
      const carArray = cars.map(car => ({
        element: car,
        number: parseInt(car.getAttribute('data-number'))
      }));
  
      if (order === 1) {
        carArray.sort((a, b) => a.number - b.number);
      } else if (order === 2) {
        carArray.sort((a, b) => b.number - a.number);
      }
  
      carContainer.innerHTML = '';
  
      carArray.forEach(car => carContainer.appendChild(car.element));
    }
  
    const sortSelect = document.querySelector('select');
    sortSelect.addEventListener('change', function () {
      const sortOrder = parseInt(this.value);
      sortCars(sortOrder);
    });
  });
  
/* Burger */
function toggleMenu() {
    var menu = document.getElementById("main-menu").getElementsByTagName("ul")[0];
    menu.classList.toggle("show");
  }