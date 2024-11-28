const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.write("HELLO WORLD");
        res.end();
    } else if (req.url === "/data" && req.method ==="GET") {
        res.write(new Date().toString());
        res.end();
    }else {
        res.write("Not Found");
        res.end();
    }
});
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});