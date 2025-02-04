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
const { addBook, updateBookTitle, books } = require("../bookManager");


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