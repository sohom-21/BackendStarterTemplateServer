import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is required"],
        trim: true,
        maxlength: 50,
        minlength: 2,
    },
    email: {
        type: String,
        required:[true,'user email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        match:[/\S+@\S+\.\S+/,],
    },
    password: {
        type: String,
        required: [true,"password is required"],
        minLength:4,
    }
},{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;