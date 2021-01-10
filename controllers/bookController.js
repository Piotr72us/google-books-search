
const db = require("../models");

module.export = {
  findAll: function(req, res) {
  db.Book.find(req.query)
    .then(bookDb => res.json(bookDb))
    .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(bookDb => res.json(bookDb))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Book.create(req.body)
    .then(bookDb => res.json(bookDb))
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({id: req.params.id}, req.body)
    .then(bookDb => res.json(bookDb)) 
    .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
    .then(bookDb => bookDb.remove())
    .then(bookDb => res.json(bookDb))
    .catch(err => res.status(422).json(err))
  }
}