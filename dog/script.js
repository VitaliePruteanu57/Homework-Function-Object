
function findBook(books) {
    let controlBook = books[0]; 
    for (let i = 1; i < books.length; i++) {
      if (books[i].pages > controlBook.pages) {
        controlBook = books[i];
      }
    }
    return controlBook;
  }
  
  
  const books = [
    { title: "Love in the Time of Cholera ", author: "Gabriel García Márquez ", pages: 640 },
    { title: "Othello", author: "William Shakespeare", pages: 843 },
    { title: "Anna Karenina", author: "William Shakespeare", pages: 1342 },
    { title: "The Idiot", author: "Fyodor Dostoevsky", pages: 479 },
   
  ];
  
  const controlBook = findBook(books);
  console.log("Самая толстая книга:", controlBook);