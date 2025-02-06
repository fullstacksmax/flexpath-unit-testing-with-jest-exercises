jest.mock("fs");

const fs = require("fs");

const {saveBooks, loadBooks, books } = require ("../bookManager");
//const { callbackify } = require("util");


test("loadBooks reads books from file using mocked fs.readFile", async () => {
    fs.readFile.mockImplementation((path, encoding, callback) => {
        callback(
            null,
            JSON.stringify([{ title: "Mocked Book", author: "Mocked Author"}]) 
        );
    });

    await loadBooks();
    expect(books).toContainEqual({
        title: "Mocked Book",
        author: "Mocked Author"
    });
});

test("saveBooks writes books to file using mocked fs.writeFile", async () => {
    books.push({ title: "Book to Save", author: "Author"});
    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
        callback(null);
    });

    await saveBooks();
    expect(fs.writeFile).toHaveBeenCalled();
})