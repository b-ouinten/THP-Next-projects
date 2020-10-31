class Food extends Cell {
  constructor(ladder, x, y, color = 'red') {
    super(ladder, x, y, ladder * 1, color);
  }
}