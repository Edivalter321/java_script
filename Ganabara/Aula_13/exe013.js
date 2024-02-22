function carregar() {
  var smg = window.document.getElementById("smg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  smg.innerHTML = `Agora são ${hora} horas. `;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpeg";
    document.body.style.background = "#0aabba";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.jpeg";
    document.body.style.background = "#6cb6a5";
  } else {
    img.src = "noite.webp";
    document.body.style.background = "#5f0609";
  }
}
