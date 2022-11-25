const http = require("http");
const fs = require("fs");
const PORT = 9000;
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        
        res.write("<!doctype html><head>");
        res.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">');
        res.write('</head><body class="text-center">');
        res.write('<h1 class="text-center">File Handling Operations</h1><hr/">');
        res.write('<a  href="createFile" class="btn btn-primary" role="button">Create</a> &nbsp;');
        res.write('<a  href="readFile" class="btn btn-primary" role="button">Read</a>  &nbsp;');
        res.write('<a  href="updateFile" class="btn btn-primary" role="button">Update</a>  &nbsp;');
        res.write('<a  href="deleteFile" class="btn btn-primary" role="button">Delete</a>');
        res.write("<hr/></body> </html >");
        res.end();
    }
    else if (req.url == '/createFile') {
        if (fs.existsSync("neosoft.txt")) {
            res.end("Already Exists!!");
        }
        else {
            fs.writeFile("neosoft.txt", "File is created", (err) => {
                if (err) throw err;
                else res.end("File created!!");
            })
        }
    }
    else if (req.url == "/readFile") {
        if (!fs.existsSync("neosoft.txt")) {
            res.end("File does not Exists!!");
        } else {
            fs.readFile("neosoft.txt", (err) => {
                if (err) throw err;
                else res.end("File Readed!!");
            });
        }
    } else if (req.url == "/updateFile") {
        if (fs.existsSync("neosoft.txt")) {
            fs.existsSync("neosoft.txt")
            fs.appendFile(
                "neosoft.txt",
                "\n Data is appended successfully!!",
                (err) => {
                    if (err) throw err;
                    else res.end("Data updated!!");
                }
            );
        } else {
            res.end("File does not Exists!!");
        }
    } else if (req.url == "/deleteFile") {
        if (!fs.existsSync("neosoft.txt")) {
            res.end("File does not Exists!!");
        } else {
            fs.unlink("neosoft.txt", (err) => {
                if (err) throw err;
                else res.end("File Deleted Successfully!!");
            });
        }
    } else {
        res.end("Invalid URl");
    }
});
server.listen(PORT, (err) => {
    if (err) throw err;
    else {
        console.log(`Work On Port : ${PORT}`);
    }
});
