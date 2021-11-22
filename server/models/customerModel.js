const mongoose =  require("mongoose")
const customerSchema = new mongoose.Schema({
    name: {type: String, required}
})