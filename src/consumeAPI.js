import { populateScores } from './DynamicHTML.js';

export const createGame = async () => {
  let gameID;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'StreetFighter2',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then((name) => {
      gameID = name.result.split(' ')[name.result.split(' ').indexOf('ID:') + 1];
      localStorage.setItem('gameID', JSON.stringify(gameID));
    });
};

export const refreshScores = async () => {
  const gameID = document.getElementById('gameID').value;
  const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  fetch(gameUrl)
    .then((response) => response.json())
    .then((json) => {
      populateScores(json.result);
    });
};

export const postScore = async (e) => {
  e.preventDefault();
  const gameID = e.target.gameID.value;
  const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const data = {
    user: e.target.name.value,
    score: Number(e.target.score.value),
  };
  e.target.name.value = '';
  e.target.score.value = '';
  await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};