const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://201b307:201B307@cluster0.hnzcjtc.mongodb.net/platter?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected");

    const foodItemsCollection = await mongoose.connection.db.collection("Food_item");

    const foodItems = await foodItemsCollection.find({}).toArray();

    // console.log("Food Items:", foodItems);

  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoDB;
