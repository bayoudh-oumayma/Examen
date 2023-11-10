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

app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('Welcome to the CRUD page!');
});

app.post('/add', async (req, res) => {
 const newItem = { text: req.body.text, completed: false };
 const result = await db.collection('items').insertOne(newItem);
 res.json(result.ops[0]);
});

app.get('/get', async (req, res) => {
 const items = await db.collection('items').find().toArray();
 res.json(items);
});

app.put('/update/:id', async (req, res) => {
 const updatedItem = { text: req.body.text, completed: req.body.completed };
 const result = await db.collection('items').updateOne({ _id: new mongodb.ObjectID(req.params.id) }, { $set: updatedItem });
 res.json(result);
});

app.delete('/delete/:id', async (req, res) => {
 const result = await db.collection('items').deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
 res.json(result);
});

