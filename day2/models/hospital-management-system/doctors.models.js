import mongoose from "mongoose";

const hoursInHospitals = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
    
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
        },
    salary:{
        type: Number,
        required: true
    },
    worksInHospitals: [
        hoursInHospitals,
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"


        }
    ]

}, {timestamps: true});

export const Doctor = mongoose.model('Doctor', doctorSchema)