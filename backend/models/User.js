const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },{
        timestamps: true,
        toJSON: {
            virtuals: true,
            // ret is the returned Mongoose document
            transform: (_doc, ret) => {
                delete ret.password
                return ret
            }
        },
        id: false
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User