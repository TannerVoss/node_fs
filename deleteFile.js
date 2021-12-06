const fs = require("fs");

fs.unlink("HelloWorld.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File Deleted")
    }
});