import GameBoard from '../classes/gameBoard';
import Ship from '../classes/ship';

describe('BOARD FUNCTIONS', () => {
  let ship;
  let board;
  beforeEach(() => {
    //create ship of diffreant sizes
    ship = new Ship(3);
    board = new GameBoard();
  });

  test('SHIP PLACEMENT 1', () => {
    board.place(ship, 0, 0);

    expect(board.getShip(0, 0) instanceof Ship).toBeTruthy(true);
  });
  test('SHIP PLACEMENT 2', () => {
    board.place(ship, 0, 0);

    expect(board.getShip(0, 0) instanceof Ship).toBeTruthy(true);
    expect(board.getShip(1, 0) instanceof Ship).toBeTruthy(true);
    expect(board.getShip(2, 0) instanceof Ship).toBeTruthy(true);
  });

  test('SHIP PLACEMENT 3', () => {
    board.place(ship, 0, 0);
    expect(board.getShip(0, 1) instanceof Ship).toBeFalsy();
    expect(board.getShip(1, 2) instanceof Ship).toBeFalsy();
    expect(board.getShip(2, 3) instanceof Ship).toBeFalsy();
  });

  test('SHIP PLACEMENT 4', () => {
    board.place(ship, 7, 7);
    expect(board.getShip(7, 7) instanceof Ship).toBeFalsy();
    expect(board.getShip(7, 8) instanceof Ship).toBeFalsy();
    expect(board.getShip(7, 9) instanceof Ship).toBeFalsy();
  });

  test('SHIP PLACEMENT 5', () => {
    board.place(ship, 2, 0);
    expect(board.getShip(2, 0) instanceof Ship).toBeTruthy();
  });
});
