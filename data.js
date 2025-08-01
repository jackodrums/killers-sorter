const killersSongs = [
  // Hot Fuss (2004)
  { name: "Jenny Was a Friend of Mine", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Mr. Brightside", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Smile Like You Mean It", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Somebody Told Me", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "All These Things That I've Done", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Andy, You're a Star", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "On Top", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Change Your Mind", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Believe Me Natalie", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Midnight Show", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },
  { name: "Everything Will Be Alright", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" },

  // Sawdust (2007)
  { name: "Glamorous Indie Rock & Roll", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },

  // Sam's Town (2006)
  { name: "When You Were Young", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Read My Mind", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Bones", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "For Reasons Unknown", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Uncle Jonny", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Bling (Confession of a King)", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "This River Is Wild", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Why Do I Keep Counting?", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Exitlude", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },

  // Sawdust continued (B-sides & rarities)
  { name: "Tranquilize", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Shadowplay", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Leave the Bourbon on the Shelf", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Sweet Talk", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Where the White Boys Dance", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Show You How", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Move Away", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Under the Gun", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Who Let You Go?", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "All the Pretty Faces", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Glamorous Indie Rock & Roll (alt)", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Ruby, Don't Take Your Love to Town", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },
  { name: "Romeo and Juliet", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },

  // Day & Age (2008)
  { name: "Human", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Spaceman", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Joy Ride", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "A Dustland Fairytale", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "The World We Live In", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Goodnight, Travel Well", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Losing Touch", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Neon Tiger", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "This Is Your Life", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },
  { name: "Deadlines and Commitments", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersDayandAge.jpg" },

  // Battle Born (2012)
  { name: "Runaways", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Miss Atomic Bomb", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "The Way It Was", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Flesh and Bone", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Here With Me", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "From Here On Out", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Be Still", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Battle Born", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Just Another Girl", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Shot at the Night", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "The Man", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Run for Cover", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Tyson vs Douglas", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },
  { name: "Rut", art: "https://upload.wikimedia.org/wikipedia/en/6/6a/TheKillersBattleBorn.jpg" },

  // Wonderful Wonderful (2017)
  { name: "Wonderful Wonderful", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Some Kind of Love", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Have All the Songs Been Written?", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Out of My Mind", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Caution", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Blowback", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Fire in Bone", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "My Own Soul’s Warning", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Dying Breed", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Lightning Fields", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "Running Towards a Place", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },
  { name: "My God", art: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheKillersWonderfulWonderful.jpg" },

  // Imploding the Mirage (2020)
  { name: "Imploding the Mirage", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Pressure Machine", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Quiet Town", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Terrible Thing", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Cody", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Sleepwalker", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Runaway Horses", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "In Another Life", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Desperate Things", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "In the Car Outside", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "The Getting By", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "boy", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Your Side of Town", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },
  { name: "Spirit", art: "https://upload.wikimedia.org/wikipedia/en/c/c3/TheKillersImplodingTheMirage.jpg" },

  // Sawdust B-side: Get Trashed
  { name: "Get Trashed", art: "https://upload.wikimedia.org/wikipedia/en/6/6b/TheKillersSawdust.jpg" },

  // Sam's Town (Abbey Road Version)
  { name: "Sam's Town (Abbey Road Version)", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },

  // Direct Hits (2013 compilation)
  { name: "Replaceable", art: "https://upload.wikimedia.org/wikipedia/en/5/5f/TheKillersDirectHits.jpg" },
  { name: "Prize Fighter", art: "https://upload.wikimedia.org/wikipedia/en/5/5f/TheKillersDirectHits.jpg" },
  { name: "Peace of Mind", art: "https://upload.wikimedia.org/wikipedia/en/5/5f/TheKillersDirectHits.jpg" },
  { name: "Desperate Soul", art: "https://upload.wikimedia.org/wikipedia/en/5/5f/TheKillersDirectHits.jpg" },

  // Christmas songs / EPs
  { name: "A Great Big Sled", art: "https://upload.wikimedia.org/wikipedia/en/9/9a/HotFussCover.jpg" }, // no official EP art, use Hot Fuss or custom?
  { name: "Don't Shoot Me Santa", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" }, // no official Christmas EP art, fallback
  { name: "Joseph, Better You Than Me", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Happy Birthday Guadalupe!", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Boots", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "The Cowboys’ Christmas Ball", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "I Feel It in My Bones", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Christmas in L.A.", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Joel the Lump of Coal", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "Dirt Sledding", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" },
  { name: "I’ll Be Home for Christmas", art: "https://upload.wikimedia.org/wikipedia/en/f/f5/TheKillersSamsTown.jpg" }
];
