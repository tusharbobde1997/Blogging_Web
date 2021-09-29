const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true,
    // },
    postId: {
        type: String,
        required: true
    },
    // date: {
    //     type: String,
    //     required: true
    // },
    comments: {
        type: String,
        required: true
    }
});


//const comments = mongoose.model('comments', CommentsSchema);
module.exports = mongoose.model("Comments", CommentsSchema);

