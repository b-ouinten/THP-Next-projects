class Morpion {
  constructor(player) {
    this.player = player;
    this.ai = (player == "J1") ? "J2" : "J1";
    this.map = [];
    this.mapsTree = null;
    this.endTurnIndicator = 0;
    
    for (let i = 0; i < 3; i++) {
      this.map[i] = [];
      for (let j = 0; j < 3; j++) {
        this.map[i][j] = "EMPTY";
        document.getElementById(this.getZone(i, j)).onclick = () => this.playerTurn(i, j);
      }
    }
    
    const mapCopy = JSON.parse(JSON.stringify(this.map));
    this.history = new MorpionState(mapCopy);
    this.historyCursor = 0;
    
    this.difficultyLevel = 1;
    this.difficulty = {
      1: {
        method: this.randomMode,
        param: null,
      },
      2: {
        method: this.minMaxMethode,
        param: 1,
      },
      3: {
        method: this.minMaxMethode,
        param: 3,
      },
      4: {
        method: this.minMaxMethode,
        param: 5,
      },
      5: {
        method: this.minMaxMethode,
        param: null,
      },
    }

    this.finish = false;
    if (this.ai === "J1")
      this.aiTurn();
  }

  chooseDifficulty = () => {

  }

  getZone = (x, y) => {
    if (y == 0)
    return 'A' + (x + 1);
    else if (y == 1)
    return 'B' + (x + 1);
    else
    return 'C' + (x + 1);
  }
  
  checkDraw = () => {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.map[x][y] === "EMPTY")
        return false;
      }
    }
    return true;
  }
  
  fillGrid = (x, y, player) => {
    const image = (player == this.player) ? 'croix' : 'rond';
    const zone = this.getZone(x, y);
    
    if (this.map[x][y] != "EMPTY")
      return false;
    this.map[x][y] = player;
    document.getElementById(zone).style.backgroundImage = `url(image-morpion/${image}.png)`;
    document.getElementById(zone).className += " filled";
    this.checking(player);
    return true;
  }
  
  checking = (player) => {
    const one = this.map[0][0];
    const two = this.map[0][1];
    const three = this.map[0][2];
    const four = this.map[1][0];
    const five = this.map[1][1];
    const six = this.map[1][2];
    const seven = this.map[2][0];
    const eight = this.map[2][1];
    const nine = this.map[2][2];
    if (one === two && one === three && one != "EMPTY" ||
    four === five && four === six && four != "EMPTY" ||
    seven === eight && seven === nine && seven != "EMPTY" ||
    one === five && one === nine && one != "EMPTY" ||
    three === five && three === seven && three != "EMPTY" ||
    one === four && one === seven && one != "EMPTY" ||
    two === five && two === eight && two != "EMPTY" ||
    three === six && three === nine && three != "EMPTY") {
      this.finish = true;
      if (player == this.ai) {
        document.getElementById('win').textContent = 'L\'IA a gagné !';
      } else if (player == this.player) {
        document.getElementById('win').textContent = 'Tu as battu l\'IA !';
      }
    }
    else if (this.checkDraw()) {
      document.getElementById('win').textContent = "Vous êtes à égalité";
      this.finish = true;
    }
  }

  randomMode = () => {
    while (!this.fillGrid(...this.getRandomCase(), this.ia));
  }

  getRandomCase = () => {
    const len = 3;
    return [this.getRandomInt(len), this.getRandomInt(len)];
  }
  
  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  
  insideHistory = () => (this.historyCursor < this.historyEdge());

  eraseOldHistory = () => this.history.cutDescendantsFromLevel(this.historyCursor);

  putHistoryInContext = () => {
    const mapCopy = JSON.parse(JSON.stringify(this.getHistoryMap(this.historyCursor)))
    this.map = mapCopy;
    this.eraseOldHistory();
  }

  /* --- To review --- */
  manageSavingMap = () => {
    this.endTurnIndicator++;
      if (this.endTurnIndicator >= 2) {
        this.saveMap();
        this.endTurnIndicator = 0;
      }
  }
  /* --- */

  saveMap = () => {
    const mapCopy = JSON.parse(JSON.stringify(this.map));
    this.history.pushDescendant(mapCopy);

    this.historyCursor = this.historyEdge();

    document.getElementById('undo').disabled = (this.historyCursor <= 0);
    document.getElementById('redo').disabled = (this.historyCursor <= this.historyEdge());
  }

  historyEdge = () => {
    return this.history.depth();
  }

  historyBackward = () => {
    if (this.historyCursor > 0)
      this.historyCursor--;
    
    const map = this.getHistoryMap(this.historyCursor);
    this.displayHistoryMap(map);

    document.getElementById('undo').disabled = (this.historyCursor <= 0);
    document.getElementById('redo').disabled = (this.historyCursor >= this.historyEdge());
  }

  historyForwad = () => {
    if (this.historyCursor < this.historyEdge())
      this.historyCursor++;

    const map = this.getHistoryMap(this.historyCursor);
    this.displayHistoryMap(map);
    
    document.getElementById('undo').disabled = (this.historyCursor <= 0);
    document.getElementById('redo').disabled = (this.historyCursor >= this.historyEdge());
  }

  getHistoryMap = (cursor) => {
    return this.history.getLevelMap(cursor);
  }

  displayHistoryMap = (map) => {
    for (let x = 0; x < 3; x++)
      for (let y = 0; y < 3; y++) {
        const zone = this.getZone(x, y);
        if (map[x][y] === 'EMPTY') 
          document.getElementById(zone).style.backgroundImage = '';
        else {
          const image = (map[x][y] === this.player) ? 'croix' : 'rond';
          document.getElementById(zone).style.backgroundImage = `url(image-morpion/${image}.png)`;
          document.getElementById(zone).className += " filled";
        }
      }
  }

  playerTurn = (x, y) => {
    if (this.insideHistory()) {
      this.putHistoryInContext();
    }

    if (this.finish)
      return;
    if (!this.fillGrid(x, y, this.player))
      return alert('La case n\'est pas vide');
    else if (!this.finish) {
      this.saveMap();
      this.aiTurn();
    }
  }

  getBestShot = (depth) => {
    const mapCopy = JSON.parse(JSON.stringify(this.map));
    this.mapsTree = new MapNode(mapCopy, this.ai, true);
    this.mapsTree.minmax(depth);

    const bestScore = this.mapsTree.minMaxValue;
    const bestChildMapNodeIndex = this.mapsTree.children.map((child) => child.minMaxValue).indexOf(bestScore);
    const bestMove = this.mapsTree.children[bestChildMapNodeIndex].pawnPosition;

    return bestMove;
  }

  minMaxMethode = (depth) => {
    this.fillGrid(...this.getBestShot(depth), this.ai);
  }

  aiTurn = () => {
    const {method, param} = this.difficulty[this.difficultyLevel];

    method(param);
    
    this.saveMap();

    if (this.finish)
      return;
  }
}
