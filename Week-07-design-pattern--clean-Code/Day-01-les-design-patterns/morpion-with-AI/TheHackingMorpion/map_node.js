class MapNode {
  static emptyCell = 'EMPTY';
  
  constructor(map, whosTheTurn, isMaximizing, depth = 0, pawnPosition = []) {
    this.map = map;
    this.whosTheTurn = whosTheTurn;
    this.isMaximizing = isMaximizing;
    this.minMaxValue = 0;
    this.depth = depth;
    this.pawnPosition = pawnPosition;
    this.children = [];
  }

  theNext = () => this.whosTheTurn === 'J1' ? 'J2' : 'J1';

  createChild = (i, j) => {     
    const mapCopy = JSON.parse(JSON.stringify(this.map));
    mapCopy[i][j] = this.whosTheTurn;
    const newNode = new MapNode(mapCopy, this.theNext(), !this.isMaximizing, this.depth + 1, [i, j]);
    this.children.push(newNode);
  }

  createChildren = () => {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (this.map[i][j] === MapNode.emptyCell) 
          this.createChild(i, j);
  }

  ungroupMap = () => {
    const length = this.map.length;
    
    const rows = this.map;
    const columns = this.map[0].map((col, colIndex) => this.map.map((row, rowIndex) => this.map[rowIndex][colIndex]));
    const diagonal1 = this.map.map((row, rowIndex) => this.map[rowIndex][rowIndex]);
    const diagonal2 = this.map.map((row, rowIndex) => this.map[rowIndex][length - 1 - rowIndex]);

    return [...rows, ...columns, diagonal1, diagonal2];
  }

  numberOfSeriesOfTwoPawns = (map, pawn) => {
    const regex = new RegExp(`${pawn}{2}`);
    return this.ungroupMap(map).filter((el) => regex.test(el.join(''))).length;
  }

  mapIsWin = () => {
    return this.ungroupMap().some((sequence) => 
                  sequence.reduce((acc, el) => 
                    [el, acc[0] !== MapNode.emptyCell && acc[1] && el === acc[0]], [sequence[0], true])[1]);
  }
  
  mapIsFull() {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (this.map[i][j] === MapNode.emptyCell)
          return false;
    
    return true;
  }

  mapIsResolved = () => (this.mapIsWin() || this.mapIsFull()); 

  minmax = (depth) => {
    if (this.depth === depth || this.mapIsResolved()) {
      if (this.mapIsWin()) {
        if (this.isMaximizing) this.minMaxValue = -100 + this.depth;
        else this.minMaxValue = +100 + this.depth;
      } 
      else if (this.mapIsFull()) this.minMaxValue = this.depth;
      else this.minMaxValue = this.numberOfSeriesOfTwoPawns(this.map, this.whosTheTurn) - this.numberOfSeriesOfTwoPawns(this.map, this.theNext());
    }
    else {
      this.createChildren();
      this.children.forEach((child) => child.minmax(depth));
      
      if (this.isMaximizing) {
        this.minMaxValue = Math.max(...this.children.map((child) => child.minMaxValue));
      }
      else
      this.minMaxValue = Math.min(...this.children.map((child) => child.minMaxValue));
    }
  }

  /* Not used, it's implemeted for performe a certain test */
  minMaxLeaves = () => {
    if (this.children.length == 0) 
      console.log(this.minMaxValue);
    else this.children.forEach(child => child.minMaxLeaves());
  }
}