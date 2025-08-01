// Shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Clone and shuffle songs for initial round
let roundSongs = shuffle([...songs]);
let nextRound = [];
let currentPairIndex = 0;

// DOM Elements
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const progressText = document.getElementById('progress');
const songTitleLeft = document.getElementById('song-title-left');
const songTitleRight = document.getElementById('song-title-right');
const albumArtLeft = document.getElementById('album-art-left');
const albumArtRight = document.getElementById('album-art-right');
const container = document.getElementById('container');

// Display current pair
function showPair() {
  if (currentPairIndex < roundSongs.length - 1) {
    const songA = roundSongs[currentPairIndex];
    const songB = roundSongs[currentPairIndex + 1];

    songTitleLeft.textContent = songA.name;
    albumArtLeft.src = songA.art;

    songTitleRight.textContent = songB.name;
    albumArtRight.src = songB.art;

    progressText.textContent = `Match ${Math.ceil((currentPairIndex + 2) / 2)} of ${Math.ceil(roundSongs.length / 2)}`;
  } else {
    // Handle odd song out
    if (roundSongs.length % 2 === 1) {
      nextRound.push(roundSongs[roundSongs.length - 1]);
    }
    startNextRound();
  }
}

// Handle pick
function pickSong(pickedSong) {
  nextRound.push(pickedSong);
  currentPairIndex += 2;
  showPair();
}

// Start next round or show winner
function startNextRound() {
  if (nextRound.length === 1) {
    container.innerHTML = `
      <h2>Your winner:</h2>
      <img src="${nextRound[0].art}" alt="${nextRound[0].name}" style="max-width: 300px; border-radius: 10px;">
      <h3>${nextRound[0].name}</h3>
    `;
    return;
  }
  roundSongs = shuffle([...nextRound]);
  nextRound = [];
  currentPairIndex = 0;
  showPair();
}

// Button listeners
leftBtn.addEventListener('click', () => {
  pickSong(roundSongs[currentPairIndex]);
});

rightBtn.addEventListener('click', () => {
  pickSong(roundSongs[currentPairIndex + 1]);
});

// Start
showPair();