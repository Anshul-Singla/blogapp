import mongoose from "mongoose";

export  const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/blog');
};

