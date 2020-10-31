class Dungeon {
  constructor(advisedLevel, maximalPlayer, state) {
      this.advisedLevel = advisedLevel;
      this.maximalPlayer = maximalPlayer;
      this.state = state;
  }

  killBoss = () => {
      console.log("The boss is dead ! Well played");
      this.state = "defeated";
  }
}

class BlackrockDepths extends Dungeon {
  constructor(arrival, playerNumber, state = "ongoing", advisedLevel = 59, maximalPlayers = 5) {
      super(advisedLevel, maximalPlayers, state);
      this.arrival = arrival;
      this.playerNumber = playerNumber;
  }
}

let instance1 = new BlackrockDepths("13h57", 4);
let instance2 = new BlackrockDepths("14h49", 5);

console.log(instance1.arrival);
console.log(instance1.state);