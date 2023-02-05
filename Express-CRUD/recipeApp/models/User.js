const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength: [4, "Minimum 4 Characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [4, "Minimum 4 Characters"],
        maxlength: [50, "Maximum 50 Characters"]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},
{
    timestamps: true  
});

// Verify Password method:
userSchema.methods.verifyPassword= function(password){
    console.log(`${password}  -----  ${this.password}`);
    return bcrypt.compareSync(password, this.password);
}
const User= mongoose.model("User", userSchema);

module.exports = User;