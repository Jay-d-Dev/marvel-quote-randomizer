//Variables

let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let character = document.querySelector('.character');

// Qoute array
const quotes = [{
    quote: '"I don’t judge people on their worst mistakes."',
    character: '– Sam Wilson, The Falcon and the Winter Soldier'
}, {
    quote: '"That’s my secret, Cap: I’m always angry."',
    character: '– Bruce Banner, The Avengers'
}, {
    quote: '"I get emails from a raccoon, so nothing sounds crazy anymore."',
    character: '– Natasha Romanoff, Avengers: Endgame'
}, {
    quote: '"What is grief, if not love persevering?"',
    character: '– Vision, WandaVision'
}, {
    quote: '"The hardest choices require the strongest wills."',
    character: '– Thanos, Avengers: Infinity War'
}, {
    quote: '"Vengeance has consumed you... I’m done letting it consume me."',
    character: "– T'Challa, Captain America: Civil War"
}, {
    quote: '"I choose to run toward my problems, and not away from them."',
    character: '– Thor, Thor: Ragnarok'
}, {
    quote: "'It's not enough to be against something. You have to be for something better.'",
    character: '– Steve Rogers'
}, {
    quote: '"Part of the journey is the end."',
    character: '– Tony Stark, Avengers: Endgame'
}, {
    quote: "'Even if everyone is telling you that something wrong is something right... plant yourself like a tree... and say, 'No, you move.''",
    character: '– Peggy Carter, Civil War'
}, {
    quote: '"Just because something works doesn’t mean it can’t be improved."',
    character: '– Shuri, Black Panther'
}, {
    quote: '"Dread it. Run from it. Destiny arrives all the same."',
    character: '– Thanos, Avengers: Infinity War'
}, {
    quote: '"It’s not about how much we lost. It’s about how much we have left."',
    character: '– Tony Stark, Avengers: Endgame'
}, {
    quote: '"Compromise where you can. But where you can’t, don’t."',
    character: '– Peggy Carter, Civil War'
},];

//function to randomize quote selection
function randomQuote() {

    let Generator = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[Generator].quote;
    character.innerText = quotes[Generator].character;
}

// generate quote on click
btn.addEventListener('click', randomQuote);

//auto generate quote every 6 seconds (6000 ms)
let autoGenerator = setInterval(randomQuote, 6000)

//show one immediately on load
randomQuote();






//No really? Why shouldn't there be a background music to listen to?

    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const seekBar = document.getElementById('seekBar');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

  audio.addEventListener('loadedmetadata', () => {
        seekBar.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
  });

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });

  audio.addEventListener('timeupdate', () => {
        seekBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });

  seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
  });

    function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }



