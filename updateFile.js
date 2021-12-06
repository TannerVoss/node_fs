const fs = require("fs"); // require fs module

//Using the appendFile() function, append some text to the end of your HelloWorld.txt
fs.appendFile("HelloWorld.txt", "\n Additional text to be added", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File has been updated")
    }
});