import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TotalOrderSchema = new Schema({
  date: {
    type: Date,
    required: [true],
  },
  dateLocale: {
    type: String,
    required: [false],
  },
  count: {
    type: Number,
    required: [true],
  },
  value: {
    type: Number,
    required: [true],
  },
});

const TotalOrder = mongoose.model('TotalOrder', TotalOrderSchema);

export default TotalOrder;
