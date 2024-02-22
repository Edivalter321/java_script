function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados informados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade <= 12) {
        // criança
        img.setAttribute("src", "foto_crianca_m.jpg");
      } else if (idade < 20) {
        // adolescente
        img.setAttribute("src", "foto_adolescente_m.jpeg");
      } else if (idade < 59) {
        // adulto
        img.setAttribute("src", "foto_adulto_m.jpeg");
      } else {
        //idoso
        img.setAttribute("src", "foto_idoso_m.webp");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      //criança
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "foto_crianca_f.webp");
      } else if (idade < 20) {
        // Jovem
        img.setAttribute("src", "foto_adolescente_f.jpg");
      } else if (idade < 60) {
        // adulto
        img.setAttribute("src", "foto_adulto_f.webp");
      } else {
        //idoso
        img.setAttribute("src", "foto_idosa_f.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
