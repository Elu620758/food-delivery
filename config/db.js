import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://elumalai620758:food-app@food-app.fdgv9.mongodb.net/foodapp').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.