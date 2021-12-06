const fs = require("fs"); // require teh FS module

//implement fs.readFile to read HelloWorld.txt
fs.readFile("HelloWorld.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString()); // data is read as "BUFFER", convert to string to be readable
    }
});