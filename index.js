const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./users/userRoutes")


app.set('port', process.env.PORT || 4000);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

app.use('/', routes)
app.listen(app.get('port'), () => {
  console.log(`server on port`, app.get(`port`))
});
