jest.mock("fs");

const fs = require("fs");

const {loadBooks, books} = require("../bookManager");
const { callbackify } = require("util");

fs.readFile.mockImplementation((path, encoding, callback) => {
    callback(
        null,
        JSON.stringify([{title: "AutoMocked Book", author: "AutoMocked Author"}])

    );
});

test("loadBooks with automocked fs", async () => {
    await loadBooks();
    expect(books).toContainEqual({
        title: "AutoMocked Book",
        author: "AutoMocked Author"
    })
})
