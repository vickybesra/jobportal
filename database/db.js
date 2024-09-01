import mongoose from 'mongoose';
const DBConnection = async () => {
    const uri = 'mongodb://localhost:27017/'
    try {
       
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default DBConnection;