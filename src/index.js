import './style.css';
import { createGame, postScore, refreshScores } from './consumeAPI.js';

const form = document.getElementById('enterScore');
form.onsubmit = postScore;
document.getElementById('refresh_scores').onclick = refreshScores;
window.addEventListener('load', () => {
  const form = document.getElementById('enterScore');
  if (!localStorage.getItem('gameID')) createGame();
  const gameID = JSON.parse(localStorage.getItem('gameID'));
  form.gameID.value = gameID;
  refreshScores();
});
