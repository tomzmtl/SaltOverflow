import { MongoClient } from 'mongodb';


export default null;


export const all = (req, res) => {
  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('players');
    collection.find().toArray().then((r) => { res.send(r); });
    db.close();
  });
};