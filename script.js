const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

function porcentagem(obj) {
    let faturamentoTotal = 0;
    for (prop in obj) {
        faturamentoTotal += faturamento[prop]
    }
    const porcentagemPorEstado = {};
    for (prop in obj) {
        let calculo = (faturamento[prop] / faturamentoTotal) * 100
        porcentagemPorEstado[prop] = calculo.toFixed(1) + '%'
    }
    return porcentagemPorEstado
}

console.log(porcentagem(faturamento))
