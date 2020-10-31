class Cell {
  constructor (ladder, x, y, side, color) {
    this.ladder = ladder;
    this.x = x;
    this.y = y;
    this.side = side;
    this.color = color;
  }

  showIn(grid) {
    grid.ctx.fillStyle = this.color;
    grid.ctx.fillRect(this.x * this.ladder, this.y * this.ladder, this.side, this.side);
  }
  
  hideFrom(grid) {
    grid.ctx.clearRect(this.x * this.ladder, this.y * this.ladder, this.side, this.side);
  }

  setPosition(x, y) {
    this.x = x;
    this.y =y;
  }

  appear(grid, x, y) {
    this.setPosition(x, y);
    this.showIn(grid);
  }

  disappear(grid) {
    this.hideFrom(grid);
  }
}