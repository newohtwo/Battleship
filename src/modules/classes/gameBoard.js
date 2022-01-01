class GameBoard {
  constructor() {
    this.board = Array.from(Array(10), () => new Array(10));
    this.axis = true;
  }

  place(ship, x, y) {
    if (this.validCords(ship, x, y)) {
      if (this.axis) {
        this.placeHorizontal(ship, x, y);
      } else {
        this.placeVertical(ship, x, y);
      }
    }
  }

  getShip(x, y) {
    return this.board[x][y];
  }

  placeVertical(ship, x, y) {
    ship.axis.start = y;
    ship.axis.sign = 'y';
    for (let index = 0; index < ship.getLength(); index++) {
      this.board[x + index][y] = ship;
    }
  }

  placeHorizontal(ship, x, y) {
    ship.axis.start = x;
    ship.axis.sign = 'x';
    for (let index = 0; index < ship.getLength(); index++) {
      this.board[x][y + index] = ship;
    }
  }

  reciveAttack(x, y) {
    if (this.board[x][y] instanceof Ship) {
      let hitedShip = this.board[x][y];
      if (hitedShip.axis.sign === 'x' ? true : false) {
        hitedShip.hit(hitedShip.start - x);
      } else {
        hitedShip.hit(hitedShip.start - y);
      }
      return true;
    }
    //record the missed shot
    return false;
  }

  validCords(ship, x, y) {
    let size = ship.getLength() - 1;
    let vertical = size + y;
    let horizontal = size + x;

    if (vertical > 10 || horizontal > 10) {
      return false;
    }
    return true;
  }

  arrayLength() {}
}
export default GameBoard;
