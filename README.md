## Birdfeed

This is a game called Birdfeed. The objective of the game is to shoot worms into birds mouths as they fly overhead through the screen. The birdfeeder is positioned at the bottom of the screen. The player will aim at the birds by using their mouse and shoot the worm gun by clicking. There is a time limit of 60 seconds and a score that will increase with each successful shot. As well as just aiming at birds, there are clocks that randomly appear and increase your time limit by 3 seconds if you shoot them. There is also background music which can be paused, an accuracy statistic, and a high score leaderboard that utilizes local storage to save the top 5 high scores.

![wireframe](./assets/Screenshot%202023-03-09%20at%202.00.26%20PM.png)

In Birdfeed, users are able to:
- Aim at birds flying above with their mouse
- Shoot food at the birds flying above on a click
- Gain points when they successfully shoot a worm at the worm
- Increase their time limit by 3 seconds when they successfully shoot a clock.
- Keep track of their score, accuracy and time remaining with the scoreboard.

This game has been created using the following technologies:
- The Canvas API to render the background, birds, birdfeeder, and clocks.
- Webpack to bundle and transpile the source JavaScript code.
- npm to manage project dependencies.

## Implementation Timeline
Between Friday and the weekend I am hoping to have my player rendered in the appropriate position and be able to animate the birds flying through the air.

On Monday, I want to begin to implement the collision detection necessary when the fired worm intersects with a flying bird.

On Tuesday, I want to be able to increase the score when a shot is successful and implement the 60 second countdown clock.

On Wednesday, I would like to implement a high score tracker that is updated after each round of the game.

I was able to implement collision detection by checking if the worm is at the same position on the canvas as a bird or a clock. If a bird is intersecting with the worm one point is added to the score, a quack sound effect is played, and that bird flies off screen. If a clock is intersecting with the worm, that clock instance is removed from the array and 3 seconds are added to the timer. 

```javascript
checkWormShot(worm) {
    if (this.playing) {
      // Add collision detection for clocks
      this.stage.clocks.forEach((clock) => {
        if (
          worm.x < clock.x + clock.width &&
          worm.x + worm.width > clock.x &&
          worm.y < clock.y + clock.height &&
          worm.y + worm.height > clock.y
        ) {
          const index = this.stage.clocks.indexOf(clock);
          this.stage.clocks.splice(index, 1);
          this.timeRemaining += 3;
          this.numShots--;
        }
      });
      this.stage.birds.forEach((bird) => {
        if (
          worm.x < bird.x + bird.width &&
          worm.x + worm.width > bird.x &&
          worm.y < bird.y + bird.height &&
          worm.y + worm.height > bird.y
        ) {
          if (soundEffect.paused) {
            soundEffect.play()
          }
          else {
            soundEffect.currentTime = 0
          }
          this.addPoint.bind(this)();
          bird.yDirTracker = "down";
          bird.yDirTimeTracker = -1;

          if (bird.y >= canvas.height) {
            const index = this.stage.birds.indexOf(bird);
            this.stage.birds.splice(index, 1);
          }
        }
      });
    } else {
      return;
    }
  }
```

  I was able to implement a high score leaderboard by storing the top 5 scores in the browser's local storage. Upon finishing the game, the checkHighScore function is invoked which checks if the score achieved in the game was higher than any of the top 5 stored scores. If it is worthy of the leaderboard the player is prompted to enter their name and the data is stored. The renderHighScores function dynamically creates a table to display the highscores.
  
  ```javascript
  function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || []
  const lowestScore = highScores[4]?.score || 0; 

  if (score > lowestScore) {
    saveHighScore(score, highScores);
    renderHighScores();
  }
}

function saveHighScore(score, highScores) {
  const name = prompt("Your score is worthy of the leaderboard. What name would you like to be displayed?");
  const newScore = {score: score, name: name};
  highScores.push(newScore);
  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function renderHighScores() {
  // CREATE AND RENDER HIGH SCORES TABLE
  const highScores = JSON.parse(localStorage.getItem("highScores")) ?? []
  highScoresList.innerHTML = "";
  let leaderRow = document.createElement("tr");
  let leaderCell = document.createElement("td");
  leaderCell.setAttribute("colspan", 2);
  leaderCell.innerText = "High Scores";
  leaderRow.appendChild(leaderCell);
  highScoresList.appendChild(leaderRow)
  let headerRow = document.createElement("tr");
  let userHead = document.createElement("td")
  let scoreHead = document.createElement("td")
  userHead.innerText = "Name";
  scoreHead.innerText = "Score"
  headerRow.appendChild(userHead)
  headerRow.appendChild(scoreHead)
  highScoresList.appendChild(headerRow)
  for (let i = 0; i < highScores.length; i++) {
    let tr = document.createElement("tr");
    let userTD = document.createElement("td");
    let scoreTD = document.createElement("td");
    userTD.innerText = highScores[i].name;
    scoreTD.innerText = highScores[i].score
    tr.appendChild(userTD);
    tr.appendChild(scoreTD);
    highScoresList.appendChild(tr)
  }
  ```
