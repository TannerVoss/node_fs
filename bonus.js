// import fs module
const fs = require("fs");
// import path module
const path = require("path");
// import http module
const http = require("http");

/* Use the http.createServer() method to instantiate a server object. Pass in a request handler callback function that:
Deconstructs url and method properties from the request object
Listens for an error emitted from the response object and sends a 500 status code and error message
Includes a switch statement that calls our custom serveHTML function depending on the requested url */

http.createServer((req, res) => {
        const { url, method } = req; // deconstruct url and method from request object

        response.on("err", (err) => { //
            response.statusCode = 500; // sends a 500 status code and error message
            response.setHeader("content-type", "application/json"); //
            response.write(JSON.stringify(err)); //
            response.end();
        });

        switch (url) {
            case "/": //
                serveHTML("home", response, 200, url, method);
                break;
            case "/about": //
                serveHTML("about", response, 200, url, method);
                break;
            default:
                serveHTML("not found", response, 404, url, method);
        }
    })
    .listen(3000, () => console.log("listening on port 3000"));

function serveHTML(filename, response, statusCode, url, method) {
    fs.readFile(filename, )
}