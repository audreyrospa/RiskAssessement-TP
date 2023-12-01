const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require("./app/user/route");
const router = require("./routers");

const app = express();

app.use(express.json()); // Use express.json() middleware
app.use(bodyParser.json());// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.use("/addWorkActivity", router);
app.use("/getAllWorkActivity", router);
app.use("/getWorkActivity/:id", router);
app.use("/dashboard", router);
app.use("/addHazard", router);
app.use("/addRiskEvals", router);
app.use("/addRiskControl", router);


// Testing API
app.get('/', (req, res) => {
    return res.json({
        message: 'Hello from the API'
    });
});

// Port
const PORT = process.env.PORT || 8000;


// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
