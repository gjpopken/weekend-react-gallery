const express = require('express');
// const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT * FROM "gallery";
  `
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows)
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
