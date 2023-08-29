function kgToBarra(valor, espessura) {
  var espessura = parseFloat(espessura);
  return Math.ceil(valor / espessura) + " barras de 12m";
}

function barraTokg(valor, espessura) {
  var resultado = valor * espessura;
  var resultadoString = resultado.toString();
  resultadoString = resultadoString.replace(".", ",")
  return resultadoString + "kg";
}

function mtToKg(valor, espessura) {
  return ((valor/12) * espessura) + "kg";
}

function kgToMt(valor, espessura) {
  var resultado = ((valor*12) / espessura).toFixed(2);
  var resultadoString = resultado.toString();
  resultadoString = resultadoString.replace(".", ",")
  return resultadoString + "m";
}

// função que chama a função selecionada
function chamarFuncaoSelecionada() {
  var select = document.getElementById("select-opcao");
  var selectEspessura = document.getElementById("select-espessura");
  var inputValue = parseFloat(document.getElementById("inputValue").value);
  var resultInput = document.getElementById("result");

  //pegando valores selected
  var selectedValue = select.value;
  var selectedEspessura = selectEspessura.value;

  if (!isNaN(inputValue)) {
    var selectedFunction = window[selectedValue];

    var resultado = selectedFunction(inputValue, selectedEspessura);
    resultInput.value = resultado;

  } else {
    resultInput.value = "Entrada inválida";
  }
}

// Vincular evento de clique ao botão
var callFunctionBtn = document.getElementById("btn-converter");
callFunctionBtn.addEventListener("click", chamarFuncaoSelecionada);
