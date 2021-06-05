import CarDao from './dataAccessLayer/carDao';
import Garage from './presentationLayer/garage';
import Race from './presentationLayer/race';

const rootNode = document.querySelector('body');
new Garage(rootNode).render();

const garagePage = document.querySelector('#garagePage');
new Race(garagePage).render();

console.log(new CarDao().getCars(1));
