import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    complaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint"
    }],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
