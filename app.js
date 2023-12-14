let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector(".guesses");
let previousValues = [];
let remainingGuesses = 10;


document.getElementById("subt").addEventListener("click", () => {

    let userValue = document.getElementById("guessField").value;

    if(remainingGuesses > 0){
        if(userValue == ""){
            alert("Nevar būt tukšums")
            return;
        }
        
        if(userValue > 100 || userValue < 1){
            alert("Ievadītajai vērtībai ir jābūt starp 1 un 100")
            return;
        }

        if(userValue == randomNumber){
            alert("You win!")
        } else {
            remainingGuesses--;
            previousValues.push(userValue);
            guesses.innerText = previousValues.toString()
        }
    } else {
        alert("Game over. The right number was " + randomNumber)
    }
    document.querySelector(".lastResult").innerText = remainingGuesses;
    document.getElementById("guessField").value = "";
})