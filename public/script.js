function dropMenu() {
    var navbarHamburger = document.querySelector('#navbarHamburger > :nth-child(2)');
    var navbarWindow = document.querySelector('#navbarWindow');
    
    if (navbarHamburger.classList.contains('hidden')) {
      document.querySelector('#navbarHamburger > :first-child').classList.remove('rotate-45');
      document.querySelector('#navbarHamburger > :first-child').classList.remove('top-1');
      document.querySelector('#navbarHamburger > :nth-child(3)').classList.remove('-rotate-45');
      document.querySelector('#navbarHamburger > :nth-child(3)').classList.remove('-top-2');
      
      setTimeout(function() {
        navbarHamburger.classList.remove('hidden');
      }, 70); // Ritardo di 70 millisecondi
  
      navbarWindow.classList.add('-top-[900px]');
      navbarWindow.classList.remove('top-0');
    } else {
      document.querySelector('#navbarHamburger > :first-child').classList.add('rotate-45');
      document.querySelector('#navbarHamburger > :first-child').classList.add('top-1');
      document.querySelector('#navbarHamburger > :nth-child(3)').classList.add('-rotate-45');
      document.querySelector('#navbarHamburger > :nth-child(3)').classList.add('-top-2');
      
      setTimeout(function() {
        navbarHamburger.classList.add('hidden');
      }, 70); // Ritardo di 70 millisecondi
  
      navbarWindow.classList.remove('-top-[900px]');
      navbarWindow.classList.add('top-0');
    }
  };

  document.querySelector('#navbarHamburger').addEventListener('click', dropMenu);
  document.querySelectorAll('.linkMenu').forEach(item => {
    item.addEventListener('click', dropMenu);
  });
  


  // var oggi = new Date();
  // var giornoSettimana = oggi.getDay(); // Ottiene il giorno della settimana (0 = Domenica, 1 = Lunedì, ..., 6 = Sabato)
  
  // // Array di nomi dei giorni della settimana
  // var nomiGiorni = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  
  // // Seleziona il div corrispondente al giorno della settimana corrente e rimuovi la classe 'hidden'
  // var divGiornoCorrente = document.getElementById(nomiGiorni[giornoSettimana]);
  // if (divGiornoCorrente) {
  //     divGiornoCorrente.classList.remove('hidden');
  // }

  // ORARI

  // Ottenere il giorno della settimana (0 = Domenica)
  const giorno = new Date().getDay();
  const classiGiorni = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
  
  // Selezionare tutti gli elementi con la classe corrispondente al giorno della settimana e aggiungere la classe text-[#D99D5C] a ciascuno di essi
  document.querySelectorAll(`.${classiGiorni[giorno]}`).forEach(elemento => {
    elemento.classList.add('text-[#D99D5C]');
  });
  

// Selezionare l'elemento con la classe corrispondente al giorno della settimana e aggiungere la classe text-[#D99D5C]
document.querySelector(`.${classiGiorni[giorno]}`).classList.add('text-[#D99D5C]');

  
  
  // GALLERIA
   
 
const galleria = document.getElementById('galleriaContainer');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const scrollDistance = 1000; // Larghezza di uno slide

// Funzione per controllare la visibilità dell'elemento nella viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


// Funzione per aggiornare l'opacità del pulsante destro in base alla visibilità della quinta scheda
const aggiornaOpacitaPulsanteDestro = () => {
  const galleriaScheda5 = document.getElementById('galleriaScheda5');
  const galleriaScheda1 = document.getElementById('galleriaScheda1');
  if (isElementInViewport(galleriaScheda5)) {
    rightButton.style.opacity = '0';
  } else {
    rightButton.style.opacity = '1';
  }

  if (isElementInViewport(galleriaScheda1)) {
    leftButton.style.opacity = '0';
  } else {
    leftButton.style.opacity = '1';
  }
};

// Aggiungi un observer per controllare quando la quinta scheda entra o esce dalla viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.target.id === 'galleriaScheda5') {
      if (entry.isIntersecting) {
        rightButton.style.opacity = '0';
      } else {
        rightButton.style.opacity = '1';
      }
    }

    if (entry.target.id === 'galleriaScheda1') {
      if (entry.isIntersecting) {
        leftButton.style.opacity = '0';
      } else {
        leftButton.style.opacity = '1';
      }
    }
  });
});

observer.observe(galleriaScheda5);
observer.observe(galleriaScheda1);

// Aggiungi un ascoltatore per il ridimensionamento della finestra per aggiornare l'opacità del pulsante destro
window.addEventListener('resize', aggiornaOpacitaPulsanteDestro);

leftButton.addEventListener('click', () => {
  galleria.scrollTo({
    left: galleria.scrollLeft - scrollDistance,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  galleria.scrollTo({
    left: galleria.scrollLeft + scrollDistance,
    behavior: 'smooth'
  });
});


