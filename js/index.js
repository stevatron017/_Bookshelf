import {bookData} from './book-data.js'; 


// class Book {
//     constructor(author, language, subject, title) {
//         this.author = author; 
//         this.language = language; 
//         this.subject = subject; 
//         this.title = title; 
//         this.info = [author, language, subject, title];
//     }

// }

// class Bookshelf {
//     constructor(books) {
//         this.books = books; 
//     }
// }

//using only a sample from the larger dataset for experimentation purposes

const bookData2 = [
    {
      author: ["Burroughs, Edgar Rice"],
      language: "en",
      subject: [
        "Adventure stories",
        "PZ",
        "Fantasy fiction",
        "Tarzan (Fictitious character) -- Fiction",
        "PS",
        "Jungle animals -- Fiction",
      ],
      title: "The Beasts of Tarzan",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "en",
      subject: [
        "India -- History -- 19th century -- Fiction",
        "Feral children -- Fiction",
        "Animals -- Fiction",
        "Jungles -- Fiction",
        "India -- Fiction",
        "PR",
        "Adventure stories, English",
        "Mowgli (Fictitious character) -- Fiction",
        "Short stories",
        "Jungle animals -- Fiction",
      ],
      title: "The Jungle Book",
    },
    {
        author: ["Sewell, Anna"],
        language: "en",
        subject: [
          "Historical fiction",
          "PZ",
          "PR",
          "Great Britain -- History -- 19th century -- Juvenile fiction",
          "Human-animal relationships -- Juvenile fiction",
          "Horses -- Juvenile fiction",
        ],
        title: "Black Beauty",
      }
]

class Bookshelf {
    constructor(author, language, subject, title) {
        this.author = author; 
        this.language = language; 
        this.subject = subject; 
        this.title = title; 
        this.info = [author, language, subject, title];
    }

    newBook(bookData2) {
        console.log(bookData2); 
        return `${this.author}, ${this.title}`; 
    }
}


class Book {
    constructor(author, language, subject, title) {
        this.author = author; 
        this.language = language; 
        this.subject = subject; 
        this.title = title; 
        this.info = [author, language, subject, title];
    }

    newBook(bookData2) {
        console.log(bookData2); 
        return `${this.author}, ${this.language}, ${this.subject},${this.title}`; 
    }
}

//testing whether I can render given elements
const book1 = new Book('Steve', ' English', ' Stuff', ' Steves Book')

const bookChoice = document.body.querySelector('.books'); 
bookChoice.innerHTML = book1.info; 



// let bookList = bookData2; 

//looping through the array to assign class

for (let i = 0; i < bookData2.length; i++) {
    console.log(bookData2[i]);
    const book = new Book(bookData2[i].author, bookData2[i].language, bookData2[i].subject, bookData[i].title)

  }

//i was previously able to log the list with a function which I am trying to recreate
function listBooks(){
  for (let i = 0; i < bookData2.length; i++) {
    console.log(bookData2[i]);
    const book = new Book(bookData2[i].author, bookData2[i].language, bookData2[i].subject, bookData[i].title)

  }
}


//test to grab specific values
function listElements() {
    console.log(bookData2[1].author)
    console.log(bookData2[1].title)
}

let bookList = bookData2.forEach(title => document.body.querySelector('.books2'));

// let list = document.body.querySelector('.books2'); 
// list.innerHTML = bookList;