import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Plase add a text value']
    }
}, {
    timestamps: true,
}); 
 
export default mongoose.model('Goal', goalSchema) 
