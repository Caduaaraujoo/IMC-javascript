const calcularOImc = (altura, peso, callback) => {
    const imc = peso / (altura * altura);
    let faixa;

    if (imc < 18){
        faixa = "Desnutrição"
    } else if (imc >= 18 && imc <= 25){
        faixa = "Normal";
    } else {
        faixa = "Sobrepeso";
    }

    callback(imc, faixa);
}

calcularOImc(1.68, 70, (imc, faixa) =>{
    console.log(`IMC:${imc}`);
    console.log(`Faixa Correspondente:${faixa}`);
})

