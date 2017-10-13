const fetchBooks = () => data.books;

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  const app = new App();
  app.addAllEventListeners();

  app.renderBooks(fetchBooks().map(bookData => new Book(bookData)));
});
