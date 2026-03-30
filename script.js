
let currentSlide = 0;

const slides = document.querySelectorAll(".home-section h1");
const texts = document.querySelectorAll(".home-section p");
const buttons = document.querySelectorAll(".home-section .btn");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(s => s.style.display = "none");
  texts.forEach(t => t.style.display = "none");
  buttons.forEach(b => b.style.display = "none");

  dots.forEach(d => d.classList.remove("active"));
  slides[index].style.display = "block";
  texts[index].style.display = "block";
  

  if (index === 6 && buttons.length > 0) {
    buttons[0].style.display = "inline-block";
  }
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);



function showTab(tabName) {


  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });

  document.querySelectorAll(".tab-button").forEach(button => {
    button.classList.remove("active");
  });


  const selectedTab = document.getElementById(tabName + "-tab");
  if (selectedTab) {
    selectedTab.style.display = "block";
    selectedTab.classList.add("active");
  }

  
  if (event && event.target) {
    event.target.classList.add("active");
  }
}


document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", function(e) {
    e.preventDefault();

    const id = this.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth"
    });

  });

});



window.onload = function () {
  showSlide(0);
  

  const firstTab = document.querySelector(".tab-button");
  if (firstTab) firstTab.click();
};