// domande all'utente

const userKilometers = document.getElementById('input-km').value;
const userAge = document.getElementById('input-age').value;
const priceForKm = 0.21;

const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

let msg, ticketPrice, discountPrice, discountMessageJunior, discountMessageSenior;

ticketPrice = userKilometers * priceForKm;
discountMessageSenior = 'Biglietto scontato del 40%'
discountMessage = 'Biglietto scontato del 20%'
msg = 'Biglietto standard'

//Input dei km inseriti in index.html
//Input degli anni inseriti in index.html

//calcolo prezzo del biglietto scontato per età

/*if(userAge < 18){
     discountPrice = ticketPrice * (1 - juniorDiscount);
}else if(userAge >= 65){
    discountPrice = ticketPrice * (1 - seniorDiscount);
};*/

//output prezzo del biglietto finale
// \\;
const btnSubmit = document.getElementById('submit');

//click bottoni
btnSubmit.addEventListener('click', function(){

if(userAge < 18){
    discountPrice = ticketPrice * (1 - juniorDiscount);
    document.getElementById('output-price').innerHTML = discountPrice;
}else if(userAge >= 65){
    discountPrice = ticketPrice * (1 - seniorDiscount);
    document.getElementById('output-price').innerHTML = discountPrice;
}else if(userAge <= 64){
    document.getElementById('output-price').innerHTML = ticketPrice;
};

const name = document.getElementById('inputName').value;
document.getElementById('output-name').innerHTML = name;

})
