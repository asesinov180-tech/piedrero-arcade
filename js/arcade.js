async function loadGames() {

    const response = await fetch("games/games.json");

    const data = await response.json();

    const grid = document.getElementById("game-grid");

    data.games.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-cover">
                🎮
            </div>

            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.system}</p>
            </div>
        `;

        grid.appendChild(card);

    });
}

loadGames();
