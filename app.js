// Assume songs array is defined in data.js with { name, art } for each song

// DOM Elements
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const progressText = document.getElementById('progress');
const songTitleLeft = document.getElementById('song-title-left');
const songTitleRight = document.getElementById('song-title-right');
const albumArtLeft = document.getElementById('album-art-left');
const albumArtRight = document.getElementById('album-art-right');
const container = document.getElementById('container');

let sortedSongs = [];
let currentMerge = null; // {left: [], right: [], result: [], leftIndex, rightIndex}
let stack = [];

// Merge sort with manual comparisons
function startSort(array) {
  if (array.length <= 1) {
    finishSorting(array);
    return;
  }
  // Split the array into halves and push sorting tasks onto stack
  stack.push({array: array, stage: 'split'});
  processStack();
}

function processStack() {
  if (stack.length === 0) return;

  const task = stack.pop();

  if (task.stage === 'split') {
    const arr = task.array;
    if (arr.length <= 1) {
      // Already sorted
      task.result = arr;
      // Save result to pass back
      stack.push({stage: 'mergeResult', result: task.result});
      processStack();
    } else {
      // Split and sort left and right
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);

      // We push merging task AFTER both halves are sorted
      stack.push({stage: 'merge', left, right, result: [], leftIndex:0, rightIndex:0});
      stack.push({array: right, stage: 'split'});
      stack.push({array: left, stage: 'split'});

      processStack();
    }
  } else if (task.stage === 'mergeResult') {
    if (stack.length === 0) {
      // This is the final sorted array
      finishSorting(task.result);
    } else {
      // Pass result up to merging task
      const top = stack.pop();
      if (top.stage === 'merge') {
        // One side done, save as left or right sorted
        if (!top.leftSorted) {
          top.leftSorted = task.result;
        } else if (!top.rightSorted) {
          top.rightSorted = task.result;
        }
        // Put back on stack and continue merging if both sides sorted
        stack.push(top);

        if (top.leftSorted && top.rightSorted) {
          // Ready to merge by asking user comparisons
          currentMerge = top;
          showNextComparison();
        } else {
          processStack();
        }
      } else {
        // Unexpected, just continue
        stack.push(top);
        processStack();
      }
    }
  } else if (task.stage === 'merge') {
    // Should never get here without left and right sorted set
    if (task.leftSorted && task.rightSorted) {
      currentMerge = task;
      showNextComparison();
    } else {
      // Wait for sides to sort
      stack.push(task);
    }
  }
}

function showNextComparison() {
  const leftArr = currentMerge.leftSorted;
  const rightArr = currentMerge.rightSorted;
  const lIndex = currentMerge.leftIndex;
  const rIndex = currentMerge.rightIndex;

  if (lIndex >= leftArr.length && rIndex >= rightArr.length) {
    // Merge done, save and continue
    const result = currentMerge.result;
    stack.pop(); // remove currentMerge task
    stack.push({stage: 'mergeResult', result});
    currentMerge = null;
    processStack();
    return;
  }

  if (lIndex >= leftArr.length) {
    // No left items left, add right item
    currentMerge.result.push(rightArr[rIndex]);
    currentMerge.rightIndex++;
    showNextComparison();
    return;
  }

  if (rIndex >= rightArr.length) {
    // No right items left, add left item
    currentMerge.result.push(leftArr[lIndex]);
    currentMerge.leftIndex++;
    showNextComparison();
    return;
  }

  // Show pair to user for choice
  songTitleLeft.textContent = leftArr[lIndex].name;
  albumArtLeft.src = leftArr[lIndex].art;
  songTitleRight.textContent = rightArr[rIndex].name;
  albumArtRight.src = rightArr[rIndex].art;
  progressText.textContent = `Ranking in progress...`;

  // Enable buttons for user choice
  leftBtn.disabled = false;
  rightBtn.disabled = false;
}

function pickSong(choice) {
  if (!currentMerge) return;

  const leftArr = currentMerge.leftSorted;
  const rightArr = currentMerge.rightSorted;

  if (choice === 'left') {
    currentMerge.result.push(leftArr[currentMerge.leftIndex]);
    currentMerge.leftIndex++;
  } else {
    currentMerge.result.push(rightArr[currentMerge.rightIndex]);
    currentMerge.rightIndex++;
  }
  showNextComparison();
}

leftBtn.addEventListener('click', () => {
  pickSong('left');
});

rightBtn.addEventListener('click', () => {
  pickSong('right');
});

function finishSorting(finalSorted) {
  // Clear UI and show full ranked list
  container.innerHTML = '<h2>Your full ranking:</h2><ol id="ranking-list"></ol>';
  progressText.textContent = 'Sorting complete!';

  const ol = document.getElementById('ranking-list');
  finalSorted.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song.name;
    ol.appendChild(li);
  });
}

// Start sorting when page loads
startSort([...songs]);