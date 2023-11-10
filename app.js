const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')
const app = express();
const port = 3000
const cnx=(url)=>{
  return mongoose.connect(url).then (()=> console.log("DB => connected"))
  .catch((error)=>console.log(error))
}
const start=async()=>{

  try {
   await  cnx("mongodb+srv://oumaymabayoudh:oumayma@cluster0.j6uj4bg.mongodb.net/");
      app.listen(port, () => {
        console.log(`connected to :${port}`);
      });
    } catch (error) {
      console.log(error);
    }
}
start()
const user = new mongoose.Schema({
  username:{
      type:String,
  },

})
const User = mongoose.model('User', user);

app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('Welcome to the CRUD page!');
});

app.post('/add', async (req, res) => {
  try {
    const newItem = { username: req.body.username };
    const result = await User.create(newItem);
    res.send(result);
  } catch (error) {
    res.status(500).send('Une erreur sest produite lors de la création de lutilisateur.');
  }
});
app.get('/get', async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.status(500).send('Une erreur utilisateurs.');
  }
});





