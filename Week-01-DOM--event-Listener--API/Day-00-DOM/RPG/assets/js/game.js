class Game {
  banner = getElementById('banner');
  userCharacterPropertiesform = getElementById('user-character-properties-form');
  pseudoInput = getElementById('pseudoInput');
  characterKindInput = getElementById('characterKindInput');
  pseudoAlert = getElementById('pseudoAlert');
  characterKindAlert = getElementById('characterKindAlert');
  userCharacterInfoPanel = getElementById('user-character-info');
  nextTurnBtn = getElementById('start-another-turn-btn');
  
  constructor(turnLeft = 2) {
    this.turnLeft = turnLeft;
    this.players = [];
    this.userCharacter = null;
    this.playerInFront;
    this.playerCounter = [];
  }
  
  getUserCharacterProperties() {
    return {
      pseudo: this.pseudoInput.value, 
      characterKind: this.characterKindInput.value
    }
  }
  
  checkUserCharacterPropertiesAndPlay() {
    let userCharacterProperties = this.getUserCharacterProperties();
    if (this.isUserCharacterPropertiesCompliant(userCharacterProperties)) {
      this.userCharacterPropertiesform.parentNode.classList.replace('mt-5', 'mt-0');
      hideElement(this.userCharacterPropertiesform);
      showElement(this.userCharacterInfoPanel);
      this.createUserCharacter(userCharacterProperties);
      this.userCharacter.type = 'humain';
      this.play();
    }
  }
  
  isUserCharacterPropertiesCompliant(properties) {
    let { pseudo, characterKind } = properties;
    if (pseudo == '')
    showElement(this.pseudoAlert);
    else
    hideElement(this.pseudoAlert);
    if (characterKind  == '')
    showElement(this.characterKindAlert);
    else
    hideElement(this.characterKindAlert);
    
    return !(pseudo == '' || characterKind == '');
  }
  
  createUserCharacter(userCharacterProperties) {
    let {pseudo, characterKind} = userCharacterProperties;
    switch (characterKind) {
      case 'fighter':
        this.userCharacter = new Fighter(pseudo);
        break;
      case 'paladin':
        this.userCharacter = new Paladin(pseudo);
        break;
      case 'monk':
        this.userCharacter = new Monk(pseudo);
        break;
      case 'berzerker':
        this.userCharacter = new Berzerker(pseudo);
        break;
      case 'assassin':
        this.userCharacter = new Assassin(pseudo);
        break;
    }
  }

  play() {
    this.recievePlayers();
    this.startNextTurn();
  }
  
  startNextTurn() {
    this.startTurn();
    
    if (this.gameOver()) {
      console.log('Game is over !');
      this.determineWinners();
      
      console.log('Winners :');
      this.showWinnersList();

      hideElement(this.nextTurnBtn);
    }

    this.skipTurn();
  }
  
  recievePlayers() {
    this.players.push(
      new Fighter('Grace'),
      new Paladin('Ulder'),
      new Monk('Moana'),
      new Berzerker('Draven'),
      new Assassin('Carl'),
      this.userCharacter
      );
    }
    
  showCreateUserCharacterForm() {
    hideElement(this.banner);
    showElement(this.userCharacterPropertiesform);
  }
  
  allReady() {
    this.players.forEach(player => {
      player.getReady();
    })
  }
    
  startTurn() {
    console.log('----------------')
    console.log(`It's ${3 - this.turnLeft}th turn`)
    console.log(`There are ${this.playersAliveNb()} warrior on the ground`)
    console.log('----------------')
    
    this.allReady();
    this.inviteEachPlayerToFight();
    this.watchStats();
  }
    
  initializePlayerCounter() {
    this.playerCounter = [...Array(6).keys()];
  }
  
  playerCounterIsRunning() {
    return (this.playerCounter.length > 0)
  }
    
  inviteEachPlayerToFight() {
    this.initializePlayerCounter();
    
    while(this.playerCounterIsRunning()) {
      this.selectPlayerInFront();
      console.log(`It's time for ${this.playerInFront.name} (${this.playerInFront.constructor.name}) to play !`)
      let choose = null;
      if (this.playerInFront.type == 'humain')
        choose = this.chooseEnemyAndAttackType();
      else
        choose = this.randomChoose();
      
      this.fight(choose);
    }
  }
  
  draw() {
    let n = this.playerCounter[this.getRandomInt(this.playerCounter.length)];
    this.playerCounter.splice(this.playerCounter.indexOf(n), 1);
    return n;
  }
  
  getRandomInt(max) {
    return Math.floor(max * Math.random());
  }
  
  selectPlayerInFront() {
    do {
      let draw = this.draw();
      this.playerInFront = this.players[draw];
    } while (this.playerInFront.isLost() && this.playerCounterIsRunning())
  }
  
  chooseEnemyAndAttackType() {
    console.log('------- Choise attack type --------');
    console.log('1. Deal damage.');
    console.log('2. Special attack.');
    
    let attackType = '';
    let message = '';
    do {
      attackType = window.prompt(`${message}Choose your attack style !`);
      if (attackType != '1' && attackType != '2')
      message = 'Wrong answer ! Try again. ';
    } while (attackType != '1' && attackType != '2')
    
    console.log('---------- Choise enemy -----------');
    let enemies = this.players.filter(enemy => enemy != this.playerInFront && enemy.isAlive());
    enemies.forEach((enemy, pos) => {
      console.log(`${pos}. ${enemy.name} (${enemy.hp} health points).`);
    })
    
    let enemyNb = '';
    message = '';
    do {
      enemyNb = window.prompt(`${message}Choose your target !`);
      if (enemyNb < 0 || enemyNb > enemies.length -1)
      message = 'Wrong answer ! Try again. ';
    } while (enemyNb < 0 || enemyNb > enemies.length - 1)
    
    let enemy = enemies[enemyNb];
    
    let choose = { attackType: attackType, enemy: enemy };
    console.log('-----------------------------------------------');
    console.log('Choose : ', choose);
    console.log('-----------------------------------------------');
    
    return choose;
  }
  
  randomChoose() {
    let enemies = this.players.filter(enemy => enemy != this.playerInFront && enemy.isAlive());
    let enemy = enemies[this.getRandomInt(enemies.length)];
    let type = `${this.getRandomInt(2) + 1}`;
    return { attackType: type, enemy: enemy};
  }
  
  fight(choose) {
    let {attackType, enemy} = choose;
    switch (attackType) {
      case '1':
        console.log('Deal damage !')
        this.playerInFront.dealDamage(enemy);
        break;
      case '2':
        console.log('Special attack !')
        this.playerInFront.specialAttack(enemy);
        break;
    }

    if (this.playerInFront.isHumain())
      this.playerInFront.displayInformations();
    else if (enemy.isHumain())
      enemy.displayInformations();

    console.log('---------------------------------------------');
  }
  
  playersAliveNb() {
    return (this.players.filter(player => player.isAlive()).length)
  }
  
  skipTurn() {
    this.turnLeft--;
  }
  
  gameOver() {
    return (this.turnLeft <= 1 || this.playersAliveNb() <= 1);
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