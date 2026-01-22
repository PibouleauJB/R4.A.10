
let I_i = 0;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let A_valeurs=[];
for (let i=0; i<20; i++){
    A_valeurs.push(getRandomIntInclusive(-10,40));
}

function showTemp() {
    ++I_i;
    let data = document.getElementById("templist");
    data.textContent = A_valeurs[I_i];
}

const intervalID = setInterval(showTemp,1000);