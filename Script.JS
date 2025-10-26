function converterParaJoule(valor, unidade) {
  switch(unidade) {
    case "joule": return valor;
    case "caloria": return valor * 4.184;
    case "kwh": return valor * 3600000;
    case "btu": return valor * 1055.06;
  }
}

function converterDeJoule(valor, unidade) {
  switch(unidade) {
    case "joule": return valor;
    case "caloria": return valor / 4.184;
    case "kwh": return valor / 3600000;
    case "btu": return valor / 1055.06;
  }
}

document.getElementById("converter").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("unidadeDe").value;
  const para = document.getElementById("unidadePara").value;

  const emJoules = converterParaJoule(valor, de);
  const resultadoFinal = converterDeJoule(emJoules, para);

  document.getElementById("resultado").textContent =
    resultadoFinal.toFixed(4) + " " + para;
});
