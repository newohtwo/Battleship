import Ship from '../classes/ship';

describe('SHIP FUNCTIONS', () => {
  let ship;
  beforeEach(() => {
    //create ship of diffreant sizes
    ship = new Ship(3);
  });

  test('SHIP LENGTH', () => {
    expect(ship.getLength()).toBe(3);
  });

  test('SHIP HELATH 1', () => {
    expect(ship.shipHealth()).toBe(0);
  });

  test('SHIP HELATH 2', () => {
    ship.hit(0);
    expect(ship.shipHealth()).toBe(1);
  });

  test('SHIP HELATH 3', () => {
    ship.hit(0);
    ship.hit(4);
    ship.hit(6);
    ship.hit(22);
    expect(ship.shipHealth()).toBe(1);
  });

  test('SHIP HELATH 3', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.shipHealth()).toBe(3);
  });

  test('SHIP SUNK 1', () => {
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
  });

  test('SHIP SUNK 2', () => {
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
  });

  test('SHIP SUNK 3', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
