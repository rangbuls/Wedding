
  simplyCountdown('.simply-countdown', {
    year: 2024, // required
    month: 10, // required
    day: 29, // required
    hours: 9, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: ' Hari', plural: ' Hari' },
        hours: { singular: ' Jam', plural: ' Jam' },
        minutes: { singular: ' Menit', plural: ' Menit' },
        seconds: { singular: ' Detik', plural: ' Detik' }
    },
  });

// Fungsi untuk menonaktifkan scroll
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const rootElement = document.querySelector(":root");
const Element = document.querySelector('.hero');
let isPlaying = false;
const song = document.querySelector('#song');

function disableScroll(){
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollTop, scrollLeft);
  }

  document.body.style.overflow = 'hidden';

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll(){
  window.onscroll = function() {}
    rootElement.style.scrollBehavior = 'smooth';

    document.body.style.overflow = 'auto';

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.display = 'none';
    }

    playAudio();
}

  function playAudio(){
    
    song.volume = 0.5;
    audioIconWrapper.style.display = 'flex';
    song.play();
    isPlaying = true;
  }

  audioIconWrapper.onclick = function(){
    if(isPlaying){
      song.pause();
      audioIcon.classList.remove('bi-disc');
      audioIcon.classList.add('bi-pause-circle');
    }
    else{
      song.play();
      audioIcon.classList.add('bi-disc');
      audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
    
  }

disableScroll();

// function agar form tetap berada diwebsite kita//
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
    })
  });
});

//JavaScript untuk menyalin teks

  function copyText(elementId) {
    // Ambil elemen berdasarkan ID
    var textToCopy = document.getElementById(elementId).innerText;
    
    // Buat elemen sementara untuk menampung teks
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    
    // Salin teks ke clipboard
    tempElement.select();
    document.execCommand("copy");
    
    // Hapus elemen sementara
    document.body.removeChild(tempElement);
    
    // Memberi tahu pengguna bahwa teks sudah disalin
    alert("Teks berhasil disalin: " + textToCopy);
  }

// javascript nama dari link
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;

// non-aktif inspect
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if(e.keyCode === 123) { // F12
      e.preventDefault();
      return false;
  }
  if(e.ctrlKey && e.shiftKey) {
      if(e.keyCode === 'I'.charCodeAt(0) || 
         e.keyCode === 'C'.charCodeAt(0) || 
         e.keyCode === 'J'.charCodeAt(0)) {
          e.preventDefault();
          return false;
      }
  }
  if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) { // Ctrl+U
      e.preventDefault();
      return false;
  }
});


(function() {
  const devtools = function() {};
  devtools.toString = function() {
    console.log('DevTools detected!');
    alert('Jangan coba-coba menggunakan DevTools!');
  };
  console.log('%c', devtools);
})();