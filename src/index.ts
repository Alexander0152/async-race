import Garage from './presentationLayer/garage';
import Store from './presentationLayer/store';

const rootNode = document.querySelector('body');
const store = new Store();
const finishIndent: number = 285;

store.initialize().then(() => {
  store.root = rootNode;
  const garage = new Garage(rootNode, store);
  setTimeout(() => {
    garage.render();
    const width = window.innerWidth;
    store.distance = width - finishIndent;
  }, 500);
});

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  store.distance = width - finishIndent;
});
