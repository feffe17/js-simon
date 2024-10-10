/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
buon divertimento e confermate lettura come al solito*/

let numeriSalvati = [];

document.getElementById("verifyForm").style.display = "none";

function numberGenerator() {
    let numeriGenerati = [];

    function numeroUnico() {
        let numero;
        do {
            numero = Math.floor(Math.random() * 101);
        } while (numeriGenerati.includes(numero));
        numeriGenerati.push(numero);
        return numero;
    }



    let num1;
    let num2;
    let num3;
    let num4;
    let num5;
    
    num1 = numeroUnico();
    num2 = numeroUnico();
    num3 = numeroUnico();
    num4 = numeroUnico();
    num5 = numeroUnico();

    numeriSalvati.push(num1 , num2, num3 , num4 , num5);
    
    // console.log(num1 , num2 , num3 , num4 , num5);
    
    let numero1 = document.getElementById("num1");
    let numero2 = document.getElementById("num2");
    let numero3 = document.getElementById("num3");
    let numero4 = document.getElementById("num4");
    let numero5 = document.getElementById("num5");
    
    numero1.textContent = num1;
    numero2.textContent = num2;
    numero3.textContent = num3;
    numero4.textContent = num4;
    numero5.textContent = num5;

    setTimeout(function() {
        numero1.textContent = "";
        numero2.textContent = "";
        numero3.textContent = "";
        numero4.textContent = "";
        numero5.textContent = "";
        document.getElementById("verifyForm").style.display = "flex";
        document.getElementById("playBtn").disabled = false;
    }, 10000); 

    document.getElementById("playBtn").disabled = true;
}

document.getElementById("playBtn").addEventListener("click", numberGenerator);

document.getElementById("verifyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let numeriDichiarati = [];
    let count = 0;
    let celle = [
        document.getElementById("num1"),
        document.getElementById("num2"),
        document.getElementById("num3"),
        document.getElementById("num4"),
        document.getElementById("num5"),
    ];

    let inputUno = parseInt(document.getElementById("inputNum1").value);
    let inputDue = parseInt(document.getElementById("inputNum2").value);
    let inputTre = parseInt(document.getElementById("inputNum3").value);
    let inputQuattro = parseInt(document.getElementById("inputNum4").value);
    let inputCinque = parseInt(document.getElementById("inputNum5").value);
    
    numeriDichiarati.push(inputUno , inputDue , inputTre , inputQuattro , inputCinque);
    console.log(numeriDichiarati);

    for (let i = 0; i < numeriDichiarati.length; i++) {
        if(numeriSalvati.includes(numeriDichiarati[i])){
            count++;
            console.log(numeriDichiarati[i] + " è incluso");
            celle[i].style.backgroundColor = "green";
            celle[i].textContent = numeriDichiarati[i];
            
        } else {
            celle[i].style.backgroundColor = "red";
            celle[i].textContent = numeriDichiarati[i];
        }
        
    }
    console.log(count);
    

});



