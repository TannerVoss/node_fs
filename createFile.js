// *** require fs module ***
// The fs module enables interacting with the file system

const fs = require("fs"); // require the fs module


/* Implement the fs.writeFile() function, creating a txt file called HelloWorld.txt, with Hello, World! inside
Use the async version */
fs.writeFile("HelloWorld.txt", "Hello World!", (err) => {
    if (err) {
        console.log(err); // if error occurs, log it
    } else {
        console.log("File written successfully"); // if succesful, log confirmation
    }
})

// run with "node createFile.js" - HelloWorld.text appears in folder