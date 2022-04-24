const mongoose = require('mongoose');

const stringOpts = {
  type: String,
  required: true,
};
const numberOpts = {
  type: Number,
  default: 0,
};
const itemSchema = new mongoose.Schema({
  name: stringOpts,
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: [Number],
  },
});

// bathSchema.index({ location: '2dsphere' });
itemSchema.index({ name: 1 }, { unique: true });

const Item = mongoose.model('item', itemSchema);

module.exports.Item = Item;
