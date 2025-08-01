const songTitleLeft = document.getElementById("song-title-left");
const songTitleRight = document.getElementById("song-title-right");
const albumArtLeft = document.getElementById("album-art-left");
const albumArtRight = document.getElementById("album-art-right");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const progress = document.getElementById("progress");
const container = document.getElementById("container");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let mergeQueue = [];
let ranking = [];

function prepareSorter(items) {
  items = shuffle(items);
  let lists = items.map((song) => [song]);

  while (lists.length > 1) {
    const newLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      if (i + 1 < lists.length) {
        mergeQueue.push([lists[i], lists[i + 1], []]);
        newLists.push([]);
      } else {
        newLists.push(lists[i]);
      }
    }
    lists = newLists;
  }
  nextComparison();
}

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
    current[2].push(...leftList, ...rightList);
    mergeQueue.pop();

    if (mergeQueue.length > 0) {
      const parent = mergeQueue[mergeQueue.length - 1];
      for (let i = 0; i < parent.length; i++) {
        if (parent[i].length === 0) {
          parent[i] = current[2];
          break;
        }
      }
    } else {
      ranking = current[2];
    }
    nextComparison();
  }
}

function choose(side) {
  const current = mergeQueue[mergeQueue.length - 1];
  const [leftList, rightList, merged] = current;

  if (side === "left") {
    merged.push(leftList.shift());
  } else {
    merged.push(rightList.shift());
  }
  nextComparison();
}

function finishRanking() {
  container.innerHTML = "<h2>Your Ranking:</h2>";
  const ol = document.createElement("ol");
  ranking.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    ol.appendChild(li);
  });
  container.appendChild(ol);
  progress.textContent = "Sorting complete!";
}

leftBtn.addEventListener("click", () => choose("left"));
rightBtn.addEventListener("click", () => choose("right"));

prepareSorter(songs);