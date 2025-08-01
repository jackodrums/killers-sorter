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

let resolveChoice; // To store Promise resolver for user choice

// Calculate total comparisons for merge sort: n * ceil(log2(n))
function calculateTotalComparisons(n) {
  return Math.ceil(n * Math.log2(n));
}

// Show two songs for user choice, returns Promise that resolves 'left' or 'right'
function userChoose(leftSong, rightSong) {
  leftTitle.textContent = leftSong.name;
  rightTitle.textContent = rightSong.name;
  leftArt.src = leftSong.art;
  rightArt.src = rightSong.art;

  // Remove previous listeners to avoid stacking
  leftBtn.onclick = () => {
    resolveChoice('left');
  };
  rightBtn.onclick = () => {
    resolveChoice('right');
  };

  return new Promise(resolve => {
    resolveChoice = resolve;
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

// Interactive merge of two sorted arrays
async function interactiveMerge(leftArr, rightArr) {
  let merged = [];
  let i = 0, j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    // Show pair and wait for user choice
    const choice = await userChoose(leftArr[i], rightArr[j]);

    if (choice === 'left') {
      merged.push(leftArr[i]);
      i++;
    } else {
      merged.push(rightArr[j]);
      j++;
    }
    comparisonsDone++;
    progressText.textContent = `Comparisons: ${comparisonsDone} / ${totalComparisons}`;
  }

  // Append leftovers
  while (i < leftArr.length) merged.push(leftArr[i++]);
  while (j < rightArr.length) merged.push(rightArr[j++]);

  return merged;
}

// Show final ranked list in the progress div (simple text list)
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
  list.style.marginTop = '10px';
  for (const song of sortedSongs) {
    const li = document.createElement('li');
    li.textContent = song.name;
    list.appendChild(li);
  }
  document.body.appendChild(list);
}

// Start sorting process on page load
async function start() {
  totalComparisons = calculateTotalComparisons(songs.length);
  comparisonsDone = 0;
  progressText.textContent = `Comparisons: 0 / ${totalComparisons}`;

  const ranked = await interactiveMergeSort(songs);
  showFinalRanking(ranked);
}

// Run after DOM loads
window.onload = () => {
  start();
};