let grid = document.getElementById('grid');
let ctx = grid.getContext('2d');
let gridLimit = grid.width / 10;  // In number of cases

let food = {
  x: 0,
  y: 0,
  drawMe() {
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(this.x * 10, this.y * 10, 10, 10); // Convert to pixel first
  },
  clearMe() {
    ctx.clearRect(this.x * 10, this.y * 10, 10, 10);
  },
  depose() {
    this.x = getRandomInt(gridLimit); // In number of cases
    this.y = getRandomInt(gridLimit);
    
    this.drawMe();
  }
};

let snake = {
  body: [],
  direction: 0,
  head(){
    return this.body[0];
  },
  clearMe() {
    this.body.forEach(organ => {
      ctx.clearRect(organ.x * 10, organ.y * 10, 10, 10);
    });
  },
  drawMe() {
    this.body.forEach(organ => {
      if (organ == this.head())
        ctx.fillStyle = 'rgb(255, 165, 0)';
      else
        ctx.fillStyle = 'rgb(0, 128, 0)';

      ctx.fillRect(organ.x * 10, organ.y * 10, 10, 10); // Convert to pixel first
    });
  },
  // At the start of the moveSnake create and display the head
  getReady() {
    this.body.push({
      x: getRandomInt(gridLimit), // In number of cases
      y: getRandomInt(gridLimit)
    })

    this.drawMe();
  },
  // Clear the snake body then draw it after translating all organs of body 
  moveOrgan(organ, dx, dy) {
    organ.x += dx;
    organ.y += dy;
  },
  moveMeToLeft() {
    this.clearMe();

    this.body.forEach(organ => {
      if (organ.y == this.head().y)
        this.moveOrgan(organ, -1, 0);
      else
        this.moveOrgan(organ, 0, 1);
    });

    this.drawMe();
  },
  moveMeToUp() {
    this.clearMe();

    this.body.forEach(organ => {
      if (organ.x == this.head().x)
        this.moveOrgan(organ, 0, -1);
      else
        this.moveOrgan(organ, -1, 0);
    });

    this.drawMe();
  },
  moveMeToRight() {
    this.clearMe();

    this.body.forEach(organ => {
      if (organ.y == this.head().y)
        this.moveOrgan(organ, 1, 0);
      else
        this.moveOrgan(organ, 0, -1);
    });

    this.drawMe();
  },
  moveMeToDown() {
    this.clearMe();

    this.body.forEach(organ => {
      if (organ.x == this.head().x)
        this.moveOrgan(organ, 0, 1);
      else
        this.moveOrgan(organ, 1, 0);
    });

    this.drawMe();
  },
  eat(food, dx, dy) {
    if (this.head().x == food.x && this.head().y == food.y) {
      console.log('food eaten !');
      // After eating, receive a new organ
      this.body.unshift({
        x: this.head().x + dx,
        y: this.head().y + dy
      });
      this.clearMe();
      this.drawMe();
      
      food.depose();
    }
  }
};

let intervalId;

let initGrid = () => {
  food.depose();
  snake.getReady(); 
}

let moveSnake = () => {
  let left = 37;
  let up = 38;
  let right = 39;
  let down = 40;
  
  switch (snake.direction) {
    case left:
      snake.moveMeToLeft();
      snake.eat(food, -1, 0);
      break;
    case up:
      snake.moveMeToUp();
      snake.eat(food, 0, -1);
      break;
    case right:
      snake.moveMeToRight();
      snake.eat(food, 1, 0);
      break;
    case down:
      snake.moveMeToDown();
      snake.eat(food, 0, 1);
      break;
  }
}
        
let getRandomInt = (max) => Math.floor(max * Math.random()); 
        
// Call initGrid method once the document is loaded
document.addEventListener('DOMContentLoaded', initGrid, false);

// Listening the keyboard
window.addEventListener('keydown', key => {
  snake.direction = key.keyCode;

  clearInterval(intervalId);  // Remove previous interval
  intervalId = window.setInterval(moveSnake, 200);
});