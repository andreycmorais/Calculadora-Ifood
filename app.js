document.getElementById("calcular").addEventListener("click", function () {
  // Pega os valores digitados pelo usuário
  let valorCorrida = parseFloat(document.getElementById("valorCorrida").value);
  let kmPorLitro = parseFloat(document.getElementById("kmPorLitro").value);
  let valorLitro = parseFloat(document.getElementById("valorLitro").value);
  let distanciaPercorrida = parseFloat(
    document.getElementById("distanciaPercorrida").value
  );

  // Calcula o lucro da rota
  let gastoCombustivel = (distanciaPercorrida / kmPorLitro) * valorLitro;
  let lucro = valorCorrida - gastoCombustivel;

  // Exibe o resultado na página
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `Você teve um lucro de ${lucro.toFixed(
    2
  )} nesta rota!`;

  // Remove a classe invisível para que o resultado seja mostrado
  resultadoElement.classList.remove("invisivel");
});
