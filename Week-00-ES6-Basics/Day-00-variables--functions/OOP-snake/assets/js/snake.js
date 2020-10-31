class Snake {
  constructor (ladder) {
    this.direction = 0;
    this.ladder = ladder;
    this.body = [new Organ(ladder, 0, 0)];
  }
  
  head() {
    return this.body[0];
  }
  
  tail() {
    return this.body[this.body.length - 1];
  }
  
  getReady(grid, x, y) {
    this.head().appear(grid, x, y);
  }
  
  toRight(grid) {
    this.tail().hideFrom(grid);
    this.body.unshift(new Organ(this.ladder, this.head().x + 1, this.head().y));
    this.head().showIn(grid);
    this.body.pop();
  }
  
  toUp(grid) {
    this.tail().hideFrom(grid);
    this.body.unshift(new Organ(this.ladder, this.head().x, this.head().y - 1));
    this.head().showIn(grid);
    this.body.pop();
  }
  
  toLeft(grid) {
    this.tail().hideFrom(grid);
    this.body.unshift(new Organ(this.ladder, this.head().x - 1, this.head().y));
    this.head().showIn(grid);
    this.body.pop();
  }
  
  toDown(grid) {
    this.tail().hideFrom(grid);
    this.body.unshift(new Organ(this.ladder, this.head().x, this.head().y + 1));
    this.head().showIn(grid);
    this.body.pop();
  }
  
  isEating(food) {
    return (this.head().x == food.x && this.head().y == food.y);
  }
  
  grow(grid, dx, dy) {
    // After eating, receive a new organ
    this.body.unshift(new Cell(this.ladder, this.head().x + dx, this.head().y + dy,));
    
    this.head().showIn(grid);
  }
}