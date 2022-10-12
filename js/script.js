// domande all'utente

const userKilometers = prompt('Quanti km vorresti percorrere?');
const userAge = prompt('Quanti anni hai?');
const priceForKm = 0.21;

const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

let msg, ticketPrice, discountPrice

ticketPrice = userKilometers * priceForKm;

msg = `Il prezzo del biglietto è di € ${ticketPrice.toFixed(2)}.`

//Input dei km inseriti in index.html
document.getElementById('km-count').innerHTML = ` 
    Il tuo percorso è lungo: ${userKilometers}km
` ;

//Input degli anni inseriti in index.html
document.getElementById('age').innerHTML = ` 
    Anni: ${userAge}
` ;

//calcolo prezzo del biglietto scontato per età
if(userAge < 18){
     discountPrice = ticketPrice * (1 - juniorDiscount);
     msg += `
     <br>
     Dato che sei minorenne hai diritto a uno sconto del ${juniorDiscount * 100}% quindi il totale del tuo biglietto è di € ${discountPrice.toFixed(2)}
     `
}else if(userAge >= 65){
    discountPrice = ticketPrice * (1 - seniorDiscount);
    msg += `
    <br>
    Dato che sei over 65 hai diritto a uno sconto del ${seniorDiscount * 100}% quindi il totale del tuo biglietto è di € ${discountPrice.toFixed(2)}
    `
};

//output prezzo del biglietto finale
document.getElementById('result').innerHTML = msg;