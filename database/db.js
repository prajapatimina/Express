let mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.set('returnOriginal', false)

let dbURL = process.env.databaseURL
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected Successfully")
}) .catch(err=>{
    console.error('Error while connecting db')
})