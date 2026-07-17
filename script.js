function GenerarNumero() {

    if (!Validar()) {
        return;
    }
    const min = document.querySelector("#min").value;
    const max = document.querySelector("#max").value;
    const randomNumber = Math.random();
    const randomNumber2 = Math.floor(randomNumber * (max - min + 1));
    
    const numero = randomNumber2 + parseInt(min);

    console.log(min, max, numero, randomNumber, randomNumber2);
    alert("Número sorteado: " + numero);
}

function Validar(){
    const min = parseInt(document.querySelector("#min").value);
    const max = parseInt(document.querySelector("#max").value);

    if (min == "" || max == "") {
        alert("Preencha todos os campos");
        return false;
    }

    if (min > max) {
        alert("O primeiro número deve ser menor que o segundo");
        return false;
    }
    return true;
}

