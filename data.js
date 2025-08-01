let remainingSongs = [];
let chosenSongs = []; // Keep track of selections
let currentPair = [];

// Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startSorter() {
    remainingSongs = shuffleArray([...songs]); // songs come from data.js
    chosenSongs = [];
    showNextPair();
}

function showNextPair() {
    if (remainingSongs.length < 2) {
        document.getElementById('choices').innerHTML = "<h2>Done! Generating your ranking...</h2>";
        showRanking();
        return;
    }

    // Pick two random songs
    let song1 = remainingSongs.splice(Math.floor(Math.random() * remainingSongs.length), 1)[0];
    let song2 = remainingSongs.splice(Math.floor(Math.random() * remainingSongs.length), 1)[0];
    currentPair = [song1, song2];

    // Update UI
    document.getElementById('btn1').innerText = song1.title;
    document.getElementById('btn2').innerText = song2.title;

    document.getElementById('img1').src = song1.albumArt;
    document.getElementById('img2').src = song2.albumArt;

    document.getElementById('progress').innerText = `${songs.length - remainingSongs.length - 2} comparisons done`;
}

function pickSong(index) {
    chosenSongs.push(currentPair[index].title);
    showNextPair();
}

function showRanking() {
    let resultHTML = "<h3>Your ranking:</h3><ol>";
    chosenSongs.forEach(song => {
        resultHTML += `<li>${song}</li>`;
    });
    resultHTML += "</ol>";
    document.getElementById('choices').innerHTML = resultHTML;
}

// Attach button events
window.onload = function() {
    document.getElementById('btn1').onclick = () => pickSong(0);
    document.getElementById('btn2').onclick = () => pickSong(1);
    startSorter();
};