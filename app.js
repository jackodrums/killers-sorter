// DOM Elements
const songTitleLeft = document.getElementById("song-title-left");
const songTitleRight = document.getElementById("song-title-right");
const albumArtLeft = document.getElementById("album-art-left");
const albumArtRight = document.getElementById("album-art-right");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const progress = document.getElementById("progress");
const container = document.getElementById("container");

// Shuffle array for randomness
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentPairs = []; // stack of comparisons
let mergeQueue = []; // stack of merges
let ranking = []; // final ranking

// Prepare shuffled pairs for sorting
function prepareSorter(items) {
  items = shuffle(items);
  // Start as individual lists for merge sort
  let lists = items.map((song) => [song]);
  while (lists.length > 1) {
    const newLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      if (i + 1 < lists.length) {
        mergeQueue.push([lists[i], lists[i + 1], []]);
        newLists.push([]); // placeholder
      } else {
        newLists.push(lists[i]);
      }
    }
    lists = newLists;
  }
  nextComparison();
}

// Show next comparison
function nextComparison() {
  if (mergeQueue.length === 0) {
    finishRanking();
    return;
  }

  const current = mergeQueue[mergeQueue.length - 1];
  const [leftList, rightList, merged] = current;

  if (leftList.length > 0 && rightList.length > 0) {
    const leftSong = leftList[0];
    const rightSong = rightList[0];

    songTitleLeft.textContent = leftSong.name;
    albumArtLeft.src = leftSong.art;
    songTitleRight.textContent = rightSong.name;
    albumArtRight.src = rightSong.art;

    const comparisonsLeft = mergeQueue.reduce(
      (acc, cur) => acc + cur[0].length + cur[1].length,
      0
    );
    progress.textContent = `Comparisons left: ${comparisonsLeft}`;
  } else {
    // Merge leftovers and pop
    current[2].push(...leftList, ...rightList);
    mergeQueue.pop();

    if (mergeQueue.length > 0) {
      //