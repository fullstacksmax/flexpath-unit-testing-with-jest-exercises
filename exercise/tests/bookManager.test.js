//npm install jest --save-dev

/**

Exercise 1:

Question: 

Explain the purpose of unit tests in the context of the `addBook` and 
`removeBook` functions in bookManager.js. 

How do unit tests fit into the software development lifecycle for this module? */

//a unit test for add book would ensure that the books array gets updated properly
//remove book should check to see if the proper book was removed and also verify that was the only book removed. */

/**Exercise 2:

Question: 

Describe the differences between manual testing and automated unit testing for 
the `findBooksByAuthor` function. 

What are the benefits of using automated tests in this case? */

/**
 * Exercise 3:

Question: 

Implement test-driven development (TDD) by writing a test for a 
new function `updateBookTitle(oldTitle, newTitle)` in bookManager.js before 
implementing it. 

The function should update the title of a book.

 */
const { addBook, updateBookTitle, books, removeBook } = require("../bookManager");


test("updates book title from oldTitle to newTitle", () => {
     addBook("ender's game", "card")

    const updated = updateBookTitle("ender's game", "ender's shadow")

    expect(updated.title).toBe("ender's shadow");
    expect(books.find((book) => book.title === "ender's shadow")).toBeTruthy();
});

test("updateBookTitle should throw an error if the book does not exist", () => {
    expect(() => updateBookTitle("non title", "any title")).toThrow(
        "Book not found"
    );
});

/**Exercise 4:

Question: 

Write a simple unit test using Jest's `test` and 
expect functions to test `addBook`. */

test("does addbook add book title and author", () => {
    const newbook = addBook("Dungeon Crawler Carl", "Matt Dinniman");
    expect(newbook).toEqual({title: "Dungeon Crawler Carl", author: "Matt Dinniman"});
    expect(books).toContainEqual(newbook)
})

/** Exercise 5:

Question: 

Use different matchers to test `removeBook`, 
including the case where the book is not found.*/

test("does removeBook remove a book from the books collection", () => {
    const testBook = addBook("chicka chicka boom boom", "dad");
    
    expect(testBook).toEqual({title: "chicka chicka boom boom", author: "dad"});
    expect(books).toContainEqual(testBook);
    const removedBook = removeBook(testBook.title)
    expect(removedBook.title).toBe("chicka chicka boom boom");
})  

test("does removeBook throw an error when used on a book not in the collection", () => {
    expect(() => removeBook("abc")).toThrow("Book not found");
});