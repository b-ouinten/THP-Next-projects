class Game {
  constructor(turnLeft = 1) {
    this.turnLeft = turnLeft;
    this.players = [];
    this.playerInFront;
    this.playerCounter = [];
  }

  playGame() {
    this.recievePlayers();

    while(this.gameOngoing()) {
      this.startTurn();
    }

    console.log('Game is over !');
    this.determineWinners();

    console.log('Winners :');
    this.showWinnersList();
  }
  
  recievePlayers() {
    this.players.push(
      new Fighter(),
      new Paladin(),
      new Monk(),
      new Berzerker(),
      new Assassin()
      );
  }

  allReady() {
    this.players.forEach(player => {
      player.getReady();
    })
  }

  startTurn() {
    console.log('----------------')
    console.log(`It's ${4 - this.turnLeft}th turn`)
    console.log(`There are ${this.playersAliveNb()} fighter on te ground`)
    console.log('----------------')

    this.allReady();
    this.inviteEachPlayerToFight();
    this.watchStats();
    this.skipTurn();
  }

  initializePlayerCounter() {
    this.playerCounter = [...Array(5).keys()];
  }

  playerCounterIsRunning() {
    return (this.playerCounter.length > 0)
  }

  inviteEachPlayerToFight() {
    this.initializePlayerCounter();

    while(this.playerCounterIsRunning()) {
      this.selectPlayerInFront();
      console.log(`It's time for ${this.playerInFront.name} (${this.playerInFront.constructor.name}) to play !`)
      
      let choose = this.chooseEnemyAndAttackType();

      this.fight(choose);
    }
  }

  draw() {
    let n = this.playerCounter[Math.floor(this.playerCounter.length * Math.random())];
    this.playerCounter.splice(this.playerCounter.indexOf(n), 1);
    return n;
  }

  selectPlayerInFront() {
    do {
      let draw = this.draw();
      this.playerInFront = this.players[draw];
    } while (this.playerInFront.isLost())
  }

  chooseEnemyAndAttackType() {
    console.log('------- Choise attack type --------');
    console.log('1. Deal damage.');
    console.log('2. Special attack.');
    let attackType = window.prompt('Enter you choise');
    
    console.log('---------- Choise enemy -----------');
    let enemies = this.players.filter(enemy => enemy != this.playerInFront && enemy.isAlive())
    enemies.forEach((enemy, pos) => {
        console.log(`${pos}. ${enemy.name} (${enemy.hp} health points).`);
      })
      
    let enemyNb = window.prompt('Enter you choise');
    let enemy = enemies[enemyNb];
    
    let choose = { attackType: attackType, enemy: enemy };
    console.log('-----------------------------------------------');
    console.log('Choose : ', choose);
    console.log('-----------------------------------------------');

    return choose;
  }

  fight(choose) {
    switch (choose.attackType) {
      case '1':
        console.log('Deal damage !')
        this.playerInFront.dealDamage(choose.enemy);
        break;
      case '2':
        console.log('Special attack !')
        this.playerInFront.specialAttack(choose.enemy);
        break;
    }
    console.log('-----------------------------------------------------------------------------');
  }

  playersAliveNb() {
    return (this.players.filter(player => player.isAlive()).length)
  }

  skipTurn() {
    this.turnLeft--;
  }
  
  gameOngoing() {
    return (this.turnLeft > 0 && this.playersAliveNb() > 1);
  }

  determineWinners() {
    this.players.forEach(player => {
      if (player.isAlive())
        player.status = 'Winner'
    })
  }

  showWinnersList() {
    this.players.forEach (player => {
      if (player.status == 'Winner')
        console.log(`${player.name}.`)
    })
  }
  
  watchStats() {
    console.log('----------------')
    this.players.forEach (player => {
      console.log(`${player.name} is ${player.status}.`);
    })
    console.log('----------------')
  }
}