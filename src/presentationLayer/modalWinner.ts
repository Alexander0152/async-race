import Car from '../businessLayer/car';

export default class ModalWinner {
  modalWindow: HTMLDivElement;

  btnCloseModal: HTMLDivElement;

  constructor(private readonly root: Element, car: Car) {
    this.modalWindow = document.createElement('div');
    this.modalWindow.innerHTML = `
          <div id="modalWinner" class="modal">
             <div class="modal-content">
               <p>Winner!</p>
               <p>Car name: ${car.name}</p>
               <p>Time: ${car.time / 1000} sec</p>
               <button class="modal_btn" id="close_modal_winner_btn">Close</button>
             </div>
         </div>`;

    this.btnCloseModal = this.modalWindow.querySelector('#close_modal_winner_btn');
    this.btnCloseModal.addEventListener('click', () => this.closeModal());
  }

  closeModal() {
    this.root.removeChild(this.modalWindow);
  }

  show(): void {
    this.root.appendChild(this.modalWindow);
  }
}
