import express from "express";
import bodyParser from "body-parser";
import noteRouter  from "./routes/noteRoutes.js";

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// allows the app to support JSON encoded bodies
app.use(bodyParser.json());

// allows the app to support URL encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use(noteRouter);

app.listen(app.get('port'), () =>(
        console.log(`Server listening on port ${app.get('port')} `))
)