import mongoose from "mongoose";

const schema = new mongoose.Schema({

    song:String,
    author:String

})

const Songs = mongoose.models.songs || mongoose.model('songs', schema);

export default Songs;