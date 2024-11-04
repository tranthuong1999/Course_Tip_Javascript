const app = require("./src/app");

const PORT = 3055;


const server = app.listen(PORT, () => {
    console.log("Port update", PORT)
})

process.on("SIGINT", () => {
    server.close(() => { 
        console.log("Exit Server")
    });
})