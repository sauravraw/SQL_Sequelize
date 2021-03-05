const express = require("express");
const router = express.Router();
const db = require("../models");

// get All data
router.get("/", (req, res) => {
  db.dummytables.findAll().then((data) => res.send(data));
});

// get by id
router.get("/:id", (req, res) => {
  db.dummytables
    .findAll({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => res.send(data));
});

// post new data
router.post("/", (req, res) => {
  db.dummytables
    .create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    })
    .then((addData) => res.send(addData));
});

// update data
router.put("/", (req, res) => {
  db.dummytables
    .update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
    .then(() => res.send("success"));
});

// delete data
router.delete("/:id", (req, res) => {
  db.dummytables
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.send("success"));
});
module.exports = router;
