import Garage from './presentationLayer/garage';
import Store from './presentationLayer/store';
import Winners from './presentationLayer/winners';

const rootNode = document.querySelector('body');
const store = new Store();

store.initialize().then(() => {
  store.root = rootNode;
  const garage = new Garage(rootNode, store);
  garage.render();
  const winners = new Winners(rootNode, store);
  winners.renderRecords();
  setTimeout(() => {
    winners.render();
  }, 500);
});
