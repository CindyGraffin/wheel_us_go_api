import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
    },
    outingPart: {
        type: Number,
        required: true
    },
    outingCre: {
        type: Number,
        required: true
    },
    tablesPartId: {
        type: [String],
        required: true
    },
    friendsId: {
        type: [String],
        required: true
    },
    groupsId: {
        type: [String],
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

export {User};