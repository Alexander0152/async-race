import Car from './businessLayer/car';
import CarDao from './dataAccessLayer/carDao';
import Garage from './presentationLayer/garage';
import Race from './presentationLayer/race';
import Store from './presentationLayer/Store';
import CarService from './serviceLayer/carService';

const rootNode = document.querySelector('body');
const store = new Store();

store.initialize().then(() => {
  store.root = rootNode;
  const garage = new Garage(rootNode, store);
  garage.render();
});
