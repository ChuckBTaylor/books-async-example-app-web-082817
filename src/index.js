const fetchBooks = () => data.books;

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  const list = document.querySelector('.ui.relaxed.divided.list');
  const form = document.querySelector('.ui.form');

  fetchBooks().forEach(bookData => {
    const book = new Book(bookData);
    list.appendChild(book.renderItem());
  });

  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    const input = this.querySelector('input');
    const term = input.value;
    input.value = '';

    list.innerHTML = '';

    Book.findByTitle(term).forEach(book => {
      list.appendChild(book.renderItem());
    });
  });

  list.addEventListener('click', function(ev) {
    ev.preventDefault();
    const clicked = ev.target;
    if (clicked.className === 'header') {
      const id = clicked.dataset.id;
      const book = Book.find(parseInt(id));
      list.innerHTML = '';
      list.appendChild(book.renderCard());
    }
  });
});
