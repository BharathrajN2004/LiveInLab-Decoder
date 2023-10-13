import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  package: {
    type: String,
    required: true,
    enum: ['learner', 'creator', 'pro'],
    default: 'learner',
  },
  payterm: {
    type: String,
    required: true,
    enum: ['week', 'month', 'year', 'free'],
    default: 'free',
  },
  lastpay: {
    type: Date,
  },
  history: {
    type: Array,
  }
});

// const profileImageSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   data: {
//     type: Buffer,
//     required: true,
//   },
//   contentType: {
//     type: String,
//     required: true
//   }
// });

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  // profileImage: {
  //   type: profileImageSchema,
  // },
  email: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  interests: {
    type: [String],
    default: [],
  },
  location: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  paymentDetail: {
    type: paymentSchema,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
