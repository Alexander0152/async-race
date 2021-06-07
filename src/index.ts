import CarDao from './dataAccessLayer/carDao';
import Garage from './presentationLayer/garage';
import Race from './presentationLayer/race';
import CarService from './serviceLayer/carService';

const rootNode = document.querySelector('body');
new Garage(rootNode).render();

const garagePage = document.querySelector('#garagePage');
// new Race(garagePage).render();

const c = CarDao.getCars(1).then();
function sayHi() {
  console.log();
}

setTimeout(sayHi, 1000);
// const d = `${c}`;
// console.log(
//   CarDao.createWinner({
//     id: 12,
//     wins: 2,
//     time: 34.4,
//   }),
// );
// console.log(CarDao.getWinners(1, 7, 'id', 'ASC'));
