class Game {
  constructor(ladder, side) {
    this.ladder = ladder;
    this.side = side;
    this.grid = new Grid(ladder, side, 'dodgerblue');
    this.food = new Food(ladder, 0, 0);
    this.snake = new Snake(ladder);
    
    this.LEFT = 37;
    this.UP = 38;
    this.RIGHT = 39;
    this.DOWN = 40;
  }
  
  init() {
    document.body.appendChild(this.grid.canvas);
    this.food.appear(this.grid, this.random(), this.random());
    this.snake.getReady(this.grid, this.random(), this.random());
  }
  
  listenKeyboard() {
    window.addEventListener('keydown', (key) => {
      this.snake.direction = key.keyCode;
    });
  }
  
  moveSnake() {
    window.setInterval(() => {
      switch (this.snake.direction) {
        case this.RIGHT:
          this.snake.toRight(this.grid);
          if (this.snake.isEating(this.food)) {
            this.snake.grow(this.grid, 1, 0);
            this.food.appear(this.grid, this.random(), this.random());
          }
          break;
        case this.UP:
          this.snake.toUp(this.grid);
          if (this.snake.isEating(this.food)) {
            this.snake.grow(this.grid, 0, -1);
            this.food.appear(this.grid, this.random(), this.random());
          }
          break;
        case this.LEFT:
          this.snake.toLeft(this.grid);
          if (this.snake.isEating(this.food)) {
            this.snake.grow(this.grid, -1, 0);
            this.food.appear(this.grid, this.random(), this.random());
          }
          break;
        case this.DOWN:
          this.snake.toDown(this.grid);
          if (this.snake.isEating(this.food)) {
            this.snake.grow(this.grid, 0, 1);
            this.food.appear(this.grid, this.random(), this.random());
          }
          break;
      }
    }, 200);
  }
  
  random() {
    return (Math.floor(this.side * Math.random()));
  }
}