const express = require('express');
// const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const queryText = `
  UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;
  `
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log(err);
    })
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT * FROM "gallery" ORDER BY "id" ASC;
  `
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((err) => {
      console.log(err);
    })
});

router.post('/', (req, res) => {
  const queryText = `
  INSERT INTO "gallery" 
("url", "title", "description")
VALUES
($1, $2, $3);
  `
  const queryParams = [req.body.url, req.body.title, req.body.description]
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log(result);
    res.sendStatus(201)
  }).catch((err) => {
    console.log(err);
  })
})

module.exports = router;
