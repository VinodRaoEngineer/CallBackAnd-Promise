// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

function arrangeTitlesAlphabetically(books, callback) {
    // Validate input
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Invalid input. Please provide a non-empty array of book objects.');
    }
  
    // Use map to create a new list containing only the titles
    const titles = books.map(book => book.title);
  
    // Sort the titles alphabetically
    titles.sort();
  
    // Call the callback function with the sorted titles
    callback(titles);
  }
  
  // Example callback function to log titles to the console
  function logTitles(titles) {
    console.log('Titles in alphabetical order:');
    titles.forEach(title => console.log(title));
  }
  
  // Example usage
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    // Add more books as needed
  ];
  
  // Call the program with the list of books and the callback function
  arrangeTitlesAlphabetically(books, logTitles);
  