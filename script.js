async function loadGames() {
  const response = await fetch('games.json');
  const data = await response.json();
  
  const playedList = document.getElementById('played-list');
  const backlogList = document.getElementById('backlog-list');

  data.backlog.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img class="cover" src="${game.cover}" alt="${game.title}">
      <div class="details">
        <span class="title">${game.title}</span>
        <div class="info-row">
          <span class="info">${game.genre}</span>
          <span class="separator">•</span>
          <span class="info">${game.year}</span>
          <span class="separator">•</span>
          <span class="info">Priorität: ${game.priority}</span>
        </div>
      </div>
    `;
    backlogList.appendChild(card);
  });

  data.played.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img class="cover" src="${game.cover}" alt="${game.title}">
      <div class="details">
        <span class="title">${game.title}</span>
        <div class="info-row">
          <span class="info">${game.genre}</span>
          <span class="separator">•</span>
          <span class="info">${game.year}</span>
          <span class="separator">•</span>
          <span class="info">${game.hours} Std.</span>
          <span class="separator">•</span>
          <span class="info">${game.rating}/10</span>
        </div>
      </div>
    `;
    playedList.appendChild(card);
  });
}

loadGames();
