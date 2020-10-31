class Game {
  constructor() {
    this.players = [];
    this.turnLeft = 10;
  }

   startGame = () => {
    console.clear();
    let player1 = new Assassin();
    let player2 = new Berzerker();
    let player3 = new Fighter();
    let player4 = new Monk();
    let player5 = new Paladin();
    this.players.push(player1,player2,player3,player4,player5);
    
    alert("C'est parti ! Pret pour choisir un personnage ? (Appuie sur 'ok')");
    
   
      console.log("********************* Voici les personnages que tu peux jouer : *********************")
      this.players.forEach(player => console.log(`${player.constructor.name} : ${player.hp} points de vie, ${player.mana} points de mana et ${player.dmg} points de dégats.`));
      let playerSelector = prompt("Alors, avec quel type de combattant veux-tu jouer ?");    
      let userName = prompt("Comment t'appelles-tu ?");

      if (playerSelector === "Assassin" || playerSelector === "assassin") {
          let userCharacter = new Assassin();
          userCharacter.name = userName;
          this.players.push(userCharacter);
         

      } else if (playerSelector === "Berzerker" || playerSelector === "berzerker") {
        let userCharacter = new Berzerker();
        userCharacter.name = userName;
        this.players.push(userCharacter);
        

      } else if  (playerSelector === "Fighter" || playerSelector === "fighter") {
        let userCharacter = new Fighter();
        userCharacter.name = userName;
        this.players.push(userCharacter);
   

      } else if  (playerSelector === "Monk" || playerSelector === "monk") {
        let userCharacter = new Monk();
        userCharacter.name = userName;
        this.players.push(userCharacter);
        
      } else if  (playerSelector === "Paladin" || playerSelector === "paladin") {
        let userCharacter = new Paladin();
        userCharacter.name = userName;
        this.players.push(userCharacter);
        
      }
      
      console.clear();
      console.log("********************* Voici nos combattants pour ce nouveau combat : ********************* ");
      this.players.forEach(player => console.log(`${this.players.indexOf(player) + 1} - ${player.constructor.name} ${player.name}, ${player.hp} points de vie, ${player.mana} points de mana et ${player.dmg} points de dégats.`));
      console.log("Que le combat commence !")
      theGame.startTurn();
};



randomEnemy(array) {
  array.sort(() => Math.random() - 0.5);
}




watchStats = () => {
 
  console.log("************************  Voici l'état actuel de notre bain de sang : ************************ ");
  this.players.forEach(player => console.log(`${player.status} - ${this.players.indexOf(player) + 1} - ${player.constructor.name} ${player.name}, ${player.hp} points de vie, ${player.mana} points de mana et ${player.dmg} points de dégats.`));
  console.log("************************  Le suspens est insoutenable ! **************************************  ");
  
}

skipTurn = () => {
  this.turnLeft = this.turnLeft -1;
  if (this.turnLeft <= 0) {
    console.log("Le combat est terminé ! Nous avons un vainqueur entouré de gros nazes !!!")
  } else {
    theGame.startTurn();
  }
}

startTurn = () => {
  console.log(`Tour numéro:  ${11 - this.turnLeft}`);
  theGame.randomEnemy(this.players);
  this.players.forEach(player => {
    theGame.watchStats();
    console.log(`C'est au tour de ${player.name} de plonger dans la mélée !`);
    let playerInfo = Object.keys(player);
    let lastPlayerInfo = playerInfo[playerInfo.length - 1];
    let userAction = prompt(`${player.name} peut effectuer une attaque normale ou son attaque spéciale ${lastPlayerInfo}, la compétence des ${player.constructor.name}s.(tape 'attaque' ou 'special')`)
    let userEnemySelection = prompt(`Alors ${player.name}, sur qui tu vas taper ?`);
    let userVictimSelection = this.players[userEnemySelection -1];

    if (userAction == 'attaque') {
      player.dealDamage(userVictimSelection);
      console.log(`${player.name} assène une attaque normale à ${userVictimSelection.name} ce qui lui fait mal ! ${userVictimSelection.name} se prend ${player.dmg} points de dégats, il lui reste ${userVictimSelection.hp} points de vie !`);

    } else if (userAction === 'special') {
        if (player.constructor.name === 'Assassin'){
            player.shadowHit();

         } else if(player.constructor.name === 'Berzerker'){
           player.rage();

         } else if(player.constructor.name === 'Monk'){
           player.heal();

         } else if(player.constructor.name === 'Fighter') {
           player.darkVision(userVictimSelection);
        
        } else if(player.constructor.name === 'Paladin'){
          player.healingLighting(userVictimSelection);
        }
      } else {
        console.log("Tu abandonnes ? Dégage, les lâches ne sont pas acceptés dans l'arène !")
      }
    if (userVictimSelection.hp <= 0) {
      userVictimSelection.isDead();
     
      player.killed();
    }
  })
  theGame.skipTurn()
}

   };

theGame = new Game();
document.getElementById('newgame').onclick = theGame.startGame;
document.getElementById('stats').onclick = theGame.watchStats;