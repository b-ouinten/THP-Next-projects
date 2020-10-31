class Grid {
  constructor (ladder, side, backgroundColor) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = side * ladder;
    this.canvas.height = side * ladder;
    this.canvas.style.backgroundColor = backgroundColor;
  }
}