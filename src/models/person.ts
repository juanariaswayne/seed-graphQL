import mongoose from 'mongoose';

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Person', personSchema);
