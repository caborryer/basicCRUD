const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());


app.listen(5000, ()=> console.log(`server on port ${port}`))
