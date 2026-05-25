// ==============================
// MENU MOBILE
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ==============================
// ANIMAÇÃO AO ROLAR
// ==============================
const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      element.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealElements);

revealElements();

// ==============================
// CONTADOR ANIMADO
// ==============================
const counters = document.querySelectorAll(".counter");

function startCounters(){

  counters.forEach(counter => {

    const target = +counter.dataset.target;
    const increment = target / 100;

    function updateCounter(){

      const current = +counter.innerText;

      if(current < target){

        counter.innerText = Math.ceil(current + increment);

        setTimeout(updateCounter, 30);

      }else{
        counter.innerText = target;
      }
    }

    updateCounter();

  });

}

let started = false;

window.addEventListener("scroll", () => {

  const statsSection = document.querySelector(".stats");

  const sectionTop = statsSection.getBoundingClientRect().top;

  if(sectionTop < window.innerHeight && !started){

    startCounters();

    started = true;
  }

});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// ==============================
// VALIDAÇÃO FORMULÁRIO
// ==============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if(nome === "" || email === "" || mensagem === ""){

    alert("Preencha todos os campos.");
    return;
  }

  if(!email.includes("@")){

    alert("Digite um e-mail válido.");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  form.reset();

});