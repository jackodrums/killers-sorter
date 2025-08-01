// app.js

// Assume songs array is loaded from data.js as `songs`

let totalComparisons = 0;
let comparisonsDone = 0;

const leftTitle = document.getElementById('song-title-left');
const rightTitle = document.getElementById('song-title-right');
const leftArt = document.getElementById('album-art-left');
const rightArt = document.getElementById('album-art-right');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const progressText = document.getElementById('progress');

let resolveChoice; // For Promise resolution when user picks

// Fisher-Yates shuffle to randomize initial song order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Calculate total comparisons for merge sort
function calculateTotalComparisons(n) {
  return Math.ceil(n * Math.log2(n));
}

// Show two songs for user choice and return a Promise
function userChoose(leftSong, rightSong) {
  leftTitle.textContent = leftSong.name;
  rightTitle.textContent = rightSong.name;
  leftArt.src = leftSong.art;
  rightArt.src = rightSong.art;

  // Remove old event listeners
  leftBtn.onclick = null;
  rightBtn.onclick = null;

  return new Promise(resolve => {
    resolveChoice = resolve;
    leftBtn.onclick = () => resolve('left');
    rightBtn.onclick = () => resolve('right');
  });
}

// Recursive async merge sort
async function interactiveMergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftSorted = await interactiveMergeSort(arr.slice(0, mid));
  const rightSorted = await interactiveMergeSort(arr.slice(mid));

  return await interactiveMerge(leftSorted, rightSorted);
}

// Interactive merge with random left/right presentation
async function interactiveMerge(leftArr, rightArr) {
  let merged = [];
  let i = 0, j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    // Randomly decide which song to show on the left
    const showLeftFirst = Math.random() > 0.5;

    const leftSong = leftArr[i];
    const rightSong = rightArr[j];

    const choice = await userChoose(
      showLeftFirst ? leftSong : rightSong,
      showLeftFirst ? rightSong : leftSong
    );

    // Interpret choice based on swap
    if ((choice === 'left' && showLeftFirst) || (choice === 'right' && !showLeftFirst)) {
      merged.push(leftSong);
      i++;
    } else {
      merged.push(rightSong);
      j++;
    }

    comparisonsDone++;
    progressText.textContent = `Comparisons: ${comparisonsDone} / ${totalComparisons}`;
  }

  // Add leftovers
  while (i < leftArr.length) merged.push(leftArr[i++]);
  while (j < rightArr.length) merged.push(rightArr[j++]);

  return merged;
}

// Show final ranked list
function showFinalRanking(sortedSongs) {
  progressText.textContent = 'Ranking complete! Final order:';
  leftBtn.style.display = 'none';
  rightBtn.style.display = 'none';
  leftArt.style.display = 'none';
  rightArt.style.display = 'none';
  leftTitle.style.display = 'none';
  rightTitle.style.display = 'none';

  const list = document.createElement('ol');
  list.style.color = 'white';
  list.style.marginTop = '20px';
  for (const song of sortedSongs) {
    const li = document.createElement('li');
    li.textContent = song.name;
    list.appendChild(li);
  }
  document.body.appendChild(list);
}

// Initialize
async function start() {
  shuffleArray(songs); // Shuffle initial order
  totalComparisons = calculateTotalComparisons(songs.length);
  comparisonsDone = 0;
  progressText.textContent = `Comparisons: 0 / ${totalComparisons}`;

  const ranked = await interactiveMergeSort(songs);
  showFinalRanking(ranked);
}

// Start after DOM loads
window.onload = start;