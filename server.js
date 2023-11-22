const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:0001'
}

//middlewares
//app.use(cors(corOptions))

app.use(express.json)

app.use(express.urlencoded ({ extended: true}))

//testing api
app.get('/', (req, res)=>{
    return res.json ({
        message: 'hello from api'
    });
});

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
