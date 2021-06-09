import Car from './businessLayer/car';
import CarDao from './dataAccessLayer/carDao';
import Garage from './presentationLayer/garage';
import Race from './presentationLayer/race';
import Store from './presentationLayer/Store';
import CarService from './serviceLayer/carService';

const rootNode = document.querySelector('body');
const store = new Store();
store.initialize().then(() => {
  new Garage(rootNode, store).render();
});

// rootNode.appendChild(car.render());
// car.changeImageColor('black');
// car.image.style.fillRule = 'blue';
// console.log(car);
// const el = document.createElement('div');
// el.innerHTML = `<button>TEST</button>`;
// el.style.backgroundColor = store.color;
// rootNode.appendChild(el);
// store.color = 'green';
// el.addEventListener('click', () => alert(`${el}`));

// new Race(garagePage).render();

// const c = CarDao.getCars(1).then();
// const c = new Store();
// async function sayHi() {
//   new Garage(rootNode, new Store()).render();
// }

// setTimeout(sayHi, 3000);

// console.log(CarDao.deleteCar(5));
// console.log(CarDao.getWinners(1, 7, 'id', 'ASC'));
