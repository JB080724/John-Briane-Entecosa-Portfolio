
document.getElementById('menu').addEventListener('click', function() {
  var nav = document.querySelector('.nav');
  var menuToggle = document.getElementById('menu');
  nav.classList.toggle('show');
  menuToggle.classList.toggle('menu-open');
});

const picture = document.getElementById('picture');
const anime = document.getElementById('anime');

const text = document.querySelector(".sec-text");

const textLoad = ( )=> {
  setTimeout(() => {
    text.textContent = "cooking";
  }, 0);
  setTimeout(() => {
    text.textContent = "playing chess";
  },4000);
  setTimeout(() => {
    text.textContent = "watching anime";
  }, 8000);
  setTimeout(() => {
      text.textContent = "Listening to musics";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);

