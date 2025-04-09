import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullname: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        ProfilePicture: {
            type: String, // cloudinary url
            required: true,
        },
        PhoneNo: {
            type: Number, 
            required: true,
        },
        Programs: [
            {
                type: Schema.Types.ObjectId,
                ref: "Program"
            }
        ],
        
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        // position tells wheater user is mentor or client;
        Position : {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)





export const User = mongoose.model("User", userSchema)