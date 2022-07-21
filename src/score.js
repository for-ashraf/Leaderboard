export const refreshScores = async () => {
  const scoresContainer = document.querySelector('.recent-score-body');
  scoresContainer.innerHTML = '';
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
  );
  const json = await response.json();

  json.result.forEach((score) => {
    scoresContainer.innerHTML += `
    <div><span>${score.user} :</span><span>${score.score}</span></div>
    `;
  });
};

export const addScore = async (e) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
        user: `${e.target.name.value}`,
        score: `${e.target.score.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

window.addEventListener('load', refreshScores);