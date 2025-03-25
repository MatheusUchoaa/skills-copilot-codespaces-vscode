// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The comments.html file should be served as a static file.

const http = require('http');
const fs = require('fs');   // file system

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./comments.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
}
);git add comments.js
