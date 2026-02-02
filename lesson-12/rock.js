// This is a place where score has been stored
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

     //   called score update function
      updateScore()
       
    // This funtion has been created for auto play
    let isAutoPlaying = false
    let intervelId;

       function autoplay() {
        if (!isAutoPlaying) {
           intervelId = setInterval(()=> {
            const playerMove = pickComputerMove()
             playGame(playerMove)
          },1000)
          isAutoPlaying = true
        }else{
            clearInterval(intervelId);
            isAutoPlaying = false
        }
       }
    // Add eventListner for rock papper scissor
     document.querySelector('.js-rock-btn').addEventListener('click',()=>{
        playGame('rock');
     })

     document.querySelector('.js-scissors-btn').addEventListener('click',()=>{
        playGame('scissors');
     })

     document.querySelector('.js-paper-btn').addEventListener('click',()=>{
        playGame('paper');
     })
    //  Add keydwon so we can play the game by help of keyboard
    document.querySelector('body').addEventListener('keydown',(event)=>{
        if (event.key === 'r') {
            playGame('rock')
        }else if(event.key === 'p'){
            playGame('paper')
        }else if(event.key === 's'){
        playGame('scissors');
        }
    })

    // this function has been created for player move
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }

        } else if (playerMove === 'paper') {

            if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose.';
            }
          
        } else if (playerMove === 'rock') {

            if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') {
                result = 'You lose.';
            } else if (computerMove === 'scissors') {
                result = 'You win.';
            }
        }

        if (result === 'You win.') {
            score.wins += 1;
            } else if (result === 'You lose.') {
            score.losses += 1;
            } else if (result === 'Tie.') {
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
    //   called score update function
          updateScore()

          document.querySelector('.result')
            .innerHTML= result

          document.querySelector('.moves')
            .innerHTML= `You
      <img src="../images/${playerMove}-emoji.png" alt="" class="move-icon">
      <img src="../images/${computerMove}-emoji.png" alt="" class="move-icon">
       Computer`
      }
    // This function has been created for update the score in screen
      function updateScore (){
         document.querySelector('.score')
          .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
      }

    //   This function has been created for random number
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
        }

        return computerMove;
      }
    
    
