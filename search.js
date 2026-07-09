const movies= [
    "The Meg 2", //the meg 2=a.includes(t)       t=query=>result=[the meg 2]
    "The Meg", //the meg=a.includes(query)       t=query=>result=[the meg 2, the meg]
    "Extraction 2",
    "Mission Impossible: Dead Reckoning",
    "Mission Impossible: Ghost Protocol",
    "Mission Impossible: Rogue Nation",
    "The Avengers:End Game",
    "Money Heist",
    "Barbie",
    "The Avengers:Age of Ultron",
    "The Avengers:Infinity War",
    "The Quantum Paradox",
    "Midnight Mirage",
    "Echoes of Eternity",
    "Nebula's Embrace",
    "Enigma Chronicles",
    "Radiant Requiem",
    "Shadow of Serenity",
    "Shattered Dimensions",
    "Celestial Odyssey",
    "Veil of Whispers",
    "Elysium Enigma",
    "Luminous Legacy",
    "Tempest Tango",
    "Ascension Protocol",
    "Chronicles of the Cosmos",
    "Solstice Symphony",
    "Beyond the Horizon",
    "Nebulous Nexus",
    "Aetherium Secrets",
    "Serendipity's Song",
    "Aurora Ascending",
    "Stellar Alchemy",
    "Dreamweaver's Dilemma",
    "Quantum Quicksilver",
    "Echoes from Tomorrow",
    "Midnight Metropolis",
    "Odyssey of Oracles",
    "Prism's Peril",
    "Nebula Noir",
    "Arcane Amalgam",
    "Echoes in Eternity",
    "Paradox Pandora",
    "Enchanted Eclipse",
    "Whispers in the Void",
    "Twilight Traverse",
    "Ephemeral Elysium",
    "Ethereal Enchantment",
    "Synchronicity Saga",
    "Echoes of the Nebula",
    "Midnight Monolith",
    "Zodiac Zenith",
    "Celestial Cipher",
    "Portal to Eternity",
    "Nova's Nexus",
    "Solitary Stardust",
    "Enigma of Echoes",
    "Nebula's End",
    "Whispering Shadows",
    "Quantum Quandary",
    "Aeon Arcana",
    "Twilight's Lullaby",
    "Stellar Mirage",
    "Chrono Crucible",
    "Prism's Pathway",
    "Labyrinth of Light",
    "Ethereal Echo",
    "Whispers of Infinity",
    "Enchanted Echoes",
    "Nova Nostalgia",
    "Galaxy's Grasp",
    "Veil of Vision",
    "Ephemeral Embrace",
    "Twilight Threnody",
    "Ethereal Odyssey",
    "Siren's Solace",
    "Quantum Quasar",
    "Arcane Aurora",
    "Midnight Muse",
    "Prism's Passage",
    "Enigma Entwined",
    "Celestial Caravan",
    "Nebula's Nocturne",
    "Echoes of Eden",
    "Aetherium Alchemy",
    "Stellar Soliloquy",
    "Enchanted Enigma",
    "Whispers in Wilderness",
    "Twilight Triad",
    "Luminous Labyrinth",
    "Ethereal Eclipse",
    "Nebula's Nexus",
    "Aurora's Arc",
    "Quantum Quest",
    "Prism's Prism",
    "Enchanted Odyssey",
    "Celestial Cascade",
    "Echoes of Empyrean",
    "Ethereal Equinox",
    "Twilight Travellers",
    "Nebula Nectar",
    "Quantum Quiescence",
    "Stellar Serenade",
    "Enchanted Echoes",
    "Arcane Allegory",
    "Celestial Chronograph",
    "Prism's Paradox",
    "Ephemeral Eden",
    "Nebula's Nexus",
    "Twilight Tapestry",
    "Echoes of Endeavor",
  ];

let searchInput = document.getElementById('searchInput');
let resultBox = document.getElementById('resultBox');

let lowerCaseMovies = movies.map((movie)=>{
   return movie.toLowerCase();
})
// console.log(lowerCaseMovies)

function search() {
  resultBox.innerHTML = "";
    let searchQuery = searchInput.value.toLowerCase();
    // console.log(searchQuery)
    let searchResult = lowerCaseMovies.filter((movie)=>{
    if (movie.includes(searchQuery)) {
      return movie;
    }
  })
  // console.log(searchResult)
  if (searchResult.length>0) {
    searchResult.forEach((movie)=>{
    resultBox.innerHTML += ` <li class="list-group-item">🎥 ${movie}</li>`
  })

  } else {
     resultBox.innerHTML = `
            <li class="list-group-item text-danger fw-bold">
                ❌ No movie found
            </li>`
    
  }
  
}



searchInput.addEventListener('keyup',search)

