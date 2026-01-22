
let I_i = 0;
let A_valeurs=[];
let A_couleurs = ["bleu","vert","orange","rouge"];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=0; i<20; i++){
    A_valeurs.push(getRandomIntInclusive(-10,40));
}

function showTemp() {
    ++I_i;
    if (I_i >= A_valeurs.length){
        I_i = 0;
    }
    let data = document.getElementById("tempList");
    let text = document.getElementById("tempText");
    data.textContent = A_valeurs[I_i];
    console.log(A_valeurs[I_i]);
    if (A_valeurs[I_i] < 0){
        console.log("bleu");
        data.className = "bleu";
        text.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }
    else if (A_valeurs[I_i] >= 0 && A_valeurs[I_i] < 20){
        console.log("vert");
        data.className = "vert";
        text.textContent = "\n";
    }
    else if (A_valeurs[I_i] >= 20 && A_valeurs[I_i] < 30){
        console.log("orange");
        data.className = "orange";
        text.textContent = "\n";
    }
    else {
        console.log("rouge");
        data.className = "rouge";
        text.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
}

const intervalID = setInterval(showTemp,1000);