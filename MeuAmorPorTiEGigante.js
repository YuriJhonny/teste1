function irParaAmor() {
  alert("Você está indo para o seu verdadeiro amor! ❤️");
  // window.location.href = "https://seulink.com";
}

// Mensagens caindo
function criarMensagem() {
  const mensagem = document.createElement('div');
  mensagem.classList.add('love-message');
  mensagem.innerText = 'Eu te amo';
  mensagem.style.left = Math.random() * 100 + 'vw';
  mensagem.style.fontSize = (Math.random() * 6 + 14) + 'px';
  mensagem.style.animationDuration = (Math.random() * 4 + 4) + 's';
  document.body.appendChild(mensagem);

  setTimeout(() => {
    mensagem.remove();
  }, 10000);
}
setInterval(criarMensagem, 300);

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

slides[0].classList.add("active"); // Inicia o primeiro
setInterval(showSlides, 5000);
// Redirecionamento para a página de amor
  function irParaAmor() {
    window.location.href = "DaNossaGalaxia.HTML";
  }