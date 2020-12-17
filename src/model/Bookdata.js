const mongoose= require('mongoose');//accessing mongoos package
mongoose.connect('mongodb://localhost:27017/libraryDb',
{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify:false
});// connection string
//console.log(mongoose.connection.readyState)
const Schema=mongoose.Schema;//schema definition
const BookSchema = new Schema({
titl: String,
author: String,
genre: String,
image: String
//imag will be saved pith fil
},{strict:false});
//model creation
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;
