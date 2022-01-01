import './css/style.css';
import Ship from '../src/modules/classes/ship';
import GameBoard from '../src/modules/classes/gameBoard';

console.log('test');

let ship = new Ship(3);
let board = new GameBoard();
console.log(board);
board.place(ship, 2, 0);
