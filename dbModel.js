import mongoose from "mongoose";

//the schema is gonna tell the db what type/kind of data structure to expect "the ai learning"
const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
});
//Collection inside the database
export default mongoose.model("tiktokVideos",
tiktokSchema);