const userSchema = new Schema({

    role: {
      type: String,
      enum: ['user', 'admin', 'vender'], // You can define allowed roles here
      default: 'user' // Default role for new users
    }
  });
  
  const User = mongoose.model('user', userSchema);
  module.exports = User;
  