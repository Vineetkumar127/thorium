const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://prakash:prakash@cluster0.4qxv0.mongodb.net/prakash?authSource=admin&replicaSet=atlas-13sjqg-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const GlobalMW= function (req, res, next){
    const Time=  new Date().toISOString().replace(/T/,' ').replace(/\..+/,'') 
    const Request=  req.originalUrl
    const IP= req.ip
    console.log (Time, Request, IP)
}
app.use(GlobalMW)



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
