const express = require("express");
const cookieSession = require("cookie-session");

const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ["key123"]
    })
);

app.get("/login", (req, res) => {
    req.session.user = "admin";
    res.send("Session set");
});

app.get("/profile", (req, res) => {
    res.send(req.session.user);
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.send("Logged out");
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");

});
