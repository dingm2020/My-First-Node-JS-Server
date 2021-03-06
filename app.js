// need to import http library to start server
// require == import
const http = require('http') 
const port = 3000 // port server is going to listening to

const fs = require('fs') // file handling library, so server can read HTML

// creating server variable
// use http library, call createServer method
// createServer method needs a function as a parameter, function must pass request and response parameters

const server = http.createServer(function(req, res){
    // purpose of function is to handle activity of user
    // everytime user requests a page, this function is called

    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else {
            res.write(data)
        }
        res.end()
    })

    //res.write('Hello Node')
    //res.end();
})

// setting up server so that it listen on the designated port
// pass port number & function as parameters
server.listen(port, function(error){
    // purpose of this function is to pass errors
    // when server is listening to port, this function is called
    // only returns if error occurs
    if(error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log('Server is listening on port ' + port)
    }
})
