class App {
  constructor() {
    this.list = document.querySelector('.ui.relaxed.divided.list');
    this.form = document.querySelector('.ui.form');
  }

  addAllEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.list.addEventListener('click', this.handleItemClick.bind(this));
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    const term = input.value;
    input.value = '';
    this.list.innerHTML = '';

    this.renderBooks(Book.findByTitle(term));
  }

  handleItemClick(ev) {
    ev.preventDefault();
    const clicked = ev.target;
    if (clicked.className === 'header') {
      const id = clicked.dataset.id;
      const book = Book.find(parseInt(id));
      this.list.innerHTML = '';
      this.list.appendChild(book.renderCard());
    }
  }

  renderBooks(books) {
    books.forEach(book => {
      this.list.appendChild(book.renderItem());
    });
  }
}
