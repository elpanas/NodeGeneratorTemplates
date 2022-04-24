const { clearCache } = require('redis_mongoose');
const Objectid = require('mongoose').Types.ObjectId;
const { Item } = require('../models/itemModel');
const {
  redis: { time },
} = require('../config/config');

const cacheOptions = { ttl: time };

module.exports = {
  // ADD A BATH
  createItem: async (data) => {
    try {
      clearCache();
      return await Item.create(data);
    } catch (e) {
      return false;
    }
  },

  // SEARCH FOR BATHS USING COORDINATES

  // GET SINGLE BATH
  getItem: async (id) => {
    if (Objectid.isValid(bid)) {
      return Item.find({ _id: id }).lean().cache(cacheOptions);
    }
    return false;
  },

  getNearItems: async (lat, long) =>
    Item.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [long, lat] },
          $maxDistance: 3000, // meters
        },
      },
    })
      .lean()
      .cache(cacheOptions),

  // UPDATE
  updateWholeItem: async (id, data) => {
    if (Objectid.isValid(bid)) {
      clearCache();
      return Item.findByIdAndUpdate(id, data, {
        new: true,
      }).lean();
    }
    return false;
  },

  // UPDATE NUMBER OF AVAILABLE UMBRELLAS
  updateItem: async (id, newData) => {
    if (Objectid.isValid(id)) {
      clearCache();
      return Item.findByIdAndUpdate(
        id,
        { name: newData },
        { new: true }
      ).lean();
    }
    return false;
  },

  // DELETE A BATH
  removeItem: async (id) => {
    if (Objectid.isValid(id)) {
      clearCache();
      return Item.findByIdAndDelete(id).lean();
    }
    return false;
  },
};
