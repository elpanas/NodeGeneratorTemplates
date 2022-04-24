const {
  createItem,
  getItem,
  removeItem,
  updateItem,
  updateWholeItem,
} = require('../middleware/itemware');
const mongoose = require('mongoose');

module.exports = {
  postItem: async (req, res) => {
    const result = await createItem(req.body);
    await mongoose.connection.db.createIndex('items', { location: '2dsphere' });
    result ? res.status(200).send() : res.status(400).send();
  },

  getSingleItem: async (req, res) => {
    const result = await getItem(req.params.id);
    result ? res.status(200).json(result) : res.status(400).send();
  },

  patchItem: async (req, res) => {
    const result = await updateItem(req.params.id, req.body);
    result ? res.status(200).json(result) : res.status(400).send();
  },

  putItem: async (req, res) => {
    const result = await updateWholeItem(req.params.id, req.body);
    result ? res.status(200).json(result) : res.status(400).send();
  },

  deleteItem: async (req, res) => {
    const result = await removeItem(req.params.id);
    result ? res.status(200).send(result) : res.status(400).send();
  },
};
