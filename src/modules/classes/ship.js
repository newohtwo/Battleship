class Ship {
  constructor(shipLength) {
    this.shipHull = new Array(shipLength);
    this.sunk = false;
    this.shipLength = shipLength;
    this.axis = { start: null, sign: undefined };
    this.initHit();
  }

  initHit() {
    for (let index = 0; index < this.shipLength; index++) {
      this.shipHull[index] = false;
    }
  }

  hit(position) {
    if (
      position >= 0 &&
      position < this.shipLength &&
      this.shipHull[position] === false
    )
      this.shipHull[position] = true;
  }

  isSunk() {
    return this.shipHealth() === this.shipLength ? true : false;
  }

  shipHealth() {
    let counter = 0;
    for (let position of this.shipHull) {
      if (position === true) counter += 1;
    }
    return counter;
  }

  getLength() {
    return this.shipLength;
  }
}

export default Ship;
