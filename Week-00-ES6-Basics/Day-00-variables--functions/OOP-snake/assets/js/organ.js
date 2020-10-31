class Organ extends Cell {
  constructor(ladder, x, y, color = 'orange') {
    super(ladder, x, y, ladder * 1, color)
  }
}