const express=require("express");
const cors = require('cors');
const app=express();
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use("/api/sheets",require("./routes/storeuser"));
app.use("/api/payments",require("./routes/createOrder"));
app.use("/api/payments",require("./routes/paymentVerificarion"));
app.use("/api/payments",require("./routes/requestKey"));


var port = process.env.PORT || 4000;

app.listen(port,async ()=>{
    console.log("Server is on and running on port 4000");
})






