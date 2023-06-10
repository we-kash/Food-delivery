const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://201b307:201B307@cluster0.hnzcjtc.mongodb.net/platter?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected");

    const foodItemsCollection = mongoose.connection.db.collection("Food_item");
    const data = await foodItemsCollection.find({}).toArray();

    global.foodItems = data;

    const foodCategory = mongoose.connection.db.collection("food_types");
    const catData = await foodCategory.find({}).toArray();

    global.foodCategory = catData;

     
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
