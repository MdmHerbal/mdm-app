import mongoose from "mongoose";
import Color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MANGO_URL);
    console.log(
      `Connected To Mangodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
    // console.log(process.env.MANGO_URL);
  }
};

export default connectDB;
