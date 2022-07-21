export const populateScores = (scoresArray) => {
  const scoresTable = document.getElementById('scores_table');
  scoresTable.innerHTML = '<th><tr style="color:Orange;"><td>Player</td><td>Score</td></tr></th>';
  for (let i = 0; i < scoresArray.length; i += 1) {
    const tr = document.createElement('tr');
    tr.classList.add('rowStyle");
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.append(`${scoresArray[i].user}`);
    td2.append(`${scoresArray[i].score}`);
    tr.appendChild(td1);
    tr.appendChild(td2);
    scoresTable.appendChild(tr);
  }
};

export const newGame = () => {
};