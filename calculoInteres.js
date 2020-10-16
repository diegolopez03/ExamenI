exports.calculoInteres = (monto, periodo, interes) => {

    let tasaInteresDecimal = interes / 100;
    let interesS = 0; 
    let saldoFinal = 0;
    let filas = [];

    periodo = Math.round(periodo * 12);
    
    saldoFinal = monto + interesS; 
     
    


    for (let i = 0; i < periodo; i++) {
        saldoFinal = monto * ((1 + tasaInteresDecimal) ** i); 
        interesS = saldoFinal * tasaInteresDecimal; 
        interesS.toFixed(2);
        saldoFinal = saldoFinal + interesS;
        saldoFinal.toFixed(2);
        filas.push({
            i,
            monto,
            interesS,
            saldoFinal
        });
    }
    return filas;
}