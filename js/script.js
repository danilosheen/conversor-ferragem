function kgToBarra(valor, espessura) {
    //limpa paragrafo
    limparCampoParagrafo();
  
    var espessura = parseFloat(espessura);
    var resultadoBruto = valor / espessura;
  
    if (resultadoBruto < 1) {
      //recebe parágrafo
      var paragrafo = document.querySelector(".p-result");
      paragrafo.textContent = "Resultado menor que uma barra de 12m";
      // var paragrafo. = "menor que uma barra de 12m";
    }
    resultado = Math.ceil(resultadoBruto);
    return resultado + " barras de 12m";
  }
  
  function barraTokg(valor, espessura) {
    var resultado = (valor * espessura).toFixed(3);
    var resultadoString = resultado.toString();
    resultadoString = resultadoString.replace(".", ",");
    return resultadoString + "kg";
  }
  
  function mtToKg(valor, espessura) {
    var resultado = ((valor / 12) * espessura).toFixed(3);
    var resultadoString = resultado.toString();
    resultadoString = resultadoString.replace(".", ",");
    return resultado + "kg";
  }
  
  function kgToMt(valor, espessura) {
    var resultado = ((valor * 12) / espessura).toFixed(2);
    var resultadoString = resultado.toString();
    resultadoString = resultadoString.replace(".", ",");
    return resultadoString + "m";
  }
  
  function executaFuncaoCalculaFerragem() {
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
  
  // função que chama a função selecionada
  function limparCampoResult() {
    //limpa result
    var resultInput = document.getElementById("result");
    resultInput.value = "";
  
  }
  
  function limparCampoParagrafo(){
    //limpa paragrafo
    var paragrafo = document.querySelector(".p-result");
    paragrafo.textContent = "";
  }
  
  var select = document.getElementById("select-opcao");
  var selectEspessura = document.getElementById("select-espessura");
  
  //após alterar o select, limpa o valor do result
  select.addEventListener("change", limparCampoResult, limparCampoParagrafo);
  selectEspessura.addEventListener("change", limparCampoResult, limparCampoParagrafo);
  
  // Vincular evento de clique ao botão
  var callFunctionBtn = document.getElementById("btn-converter");
  callFunctionBtn.addEventListener("click", executaFuncaoCalculaFerragem);
  