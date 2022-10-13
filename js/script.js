//Elements

const btnSubmit = document.getElementById('submit');
const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const inputRange = document.getElementById('fascia');
//OUTPUTS
const outputName = document.getElementById('output-name')
const outputDiscount = document.getElementById('output-discount');
const outputCarrozza = document.getElementById('output-carrozza');
const outputCp = document.getElementById('output-cp');
const outputPrice = document.getElementById('output-price');

//Dati

let userName, totalKm, ageRange, totalPrice, carrozza, code;
const juniorDiscount = .20;
const seniorDiscount = .40;
const priceForKm = .21;

//Events

btnSubmit.addEventListener('click', function(){
    userName = inputName.value;
    totalKm = inputKm.value;
    ageRange = inputRange.value;
    carrozza = Math.ceil(Math.random() * 12);
    code = Math.floor(Math.random() * (999999 - 100000) +1) +100000;
    totalPrice = totalKm * priceForKm;

    let labelDiscount = 'Biglietto Standard';

    //CALCOLO SCONTO
    if(ageRange === 'minorenne'){
        totalPrice *= totalPrice * (1 - juniorDiscount)
    }else if(ageRange === 'senior'){
        totalPrice *= (1 - seniorDiscount)
    }

    outputName.innerHTML = userName;
    outputDiscount.innerHTML = labelDiscount;
    outputCarrozza.innerHTML = carrozza;
    outputCp.innerHTML = code;
    outputPrice.innerHTML = '€ ' + totalPrice;
})