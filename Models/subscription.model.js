import mongoose from "mongoose";

const subscriptionModel = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"subscription name is required"],
        trim: true,
        minLength:3,
        maxLength:100,
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
        min: [0, "price must be greater than 0"],
    },
    currency: {
        type: String,
        enum: ["EUR","GB","TB","USD","INR"],
        default: "USD",
    },
    frequency: {
        type: String,
        enum:['daily','weekly','monthly','yearly'],
        default: "weekly",
    },
    category: {
        type: String,
        enum:['sports','news','entertainments','lifestyle','technology','finance','other'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: [true, "payment is required"],
        trim: true,
    },
    status: {
        type: String,
        enum:['active','cancelled','expired'],
        default: 'active',
    },
    startDate:{
        type: Date,
        required : true,
        validate: {
            validator:(value)=> value <= new Date(),
            message: 'Start Date must be in the past',
        }
    },
    renewalDate:{
        type: Date,
        required : true,
        validate: {
            validator:function (value) {return (value >= this.startDate)},
            message: 'renew date must be after the start date',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }
},{timestamps: true});