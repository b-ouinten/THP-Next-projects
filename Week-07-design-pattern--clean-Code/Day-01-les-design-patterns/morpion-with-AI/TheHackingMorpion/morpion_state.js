class MorpionState {
  #child;
  #level;
  
  constructor(map, level = 0) {
    this.map = map;
    this.#level = level;
    this.#child = null;
  }

  setChild = (child) => {
    this.#child = child;
    child.#level = this.#level + 1;
  }

  pushDescendant = (map) => {
    if (this.#child == null) this.#child = new MorpionState(map, this.#level + 1); 
    else this.#child.pushDescendant(map);
  }

  depth = () => {
    if (this.#child === null) return 0;
    return 1 + this.#child.depth();
  }

  getLevelMap = (level) => {
    if (this.#level === level) return this.map;
    return this.#child.getLevelMap(level);
  }
  
  cutDescendantsFromLevel = (level) => {
    if (this.#level === level) return this.#child = null;
    return this.#child.cutDescendantsFromLevel(level);
  }
}
