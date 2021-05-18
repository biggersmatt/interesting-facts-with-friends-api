const db = require("../models");

const index = (req, res) => {
  db.Party.find({}, (err, allParties) => {
    if(err) return console.log(err);
    res.json({allParties});
  })
}

const create = (req, res) => {
  console.log(req.body)
  db.Party.create(req.body, (err, newParty) => {
    if(err) console.log(err);
    res.json({newParty});
  })
}

module.exports = {
  index,
  create,
}