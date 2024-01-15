const express = require('express');
const fs = require('fs')
const multer = require('multer')
const upload = multer({ dest: './public/images' })
// const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool')

const checkFileType = (req, res, next) => {
  console.log(req.file.mimetype);
  const fileType = req.file.mimetype
  if (fileType === 'image/png' || fileType === 'image/jpeg') {
    next()
  } else {
    fs.unlink(req.file.path, () => {
      console.log('removed file.');
    })
    res.sendStatus(403)
  }
}

router.delete('/delete/:id', (req, res) => {
  const queryText = `
    DELETE FROM "gallery" WHERE "id" = $1;
  `
  pool.query(queryText, [req.params.id])
    .then((result) => {
      console.log('successfuly DELETE');
      res.sendStatus(200)
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500)
    })
})

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
  SELECT * FROM "gallery" ORDER BY "id" DESC;
  `
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((err) => {
      console.log(err);
    })
});

// ! Old Working Post
// router.post('/', (req, res) => {
//   const queryText = `
//   INSERT INTO "gallery" 
// ("url", "title", "description")
// VALUES
// ($1, $2, $3);
//   `
//   const queryParams = [req.body.url, req.body.title, req.body.description]
//   pool.query(queryText, queryParams)
//   .then((result) => {
//     // console.log(result);
//     res.sendStatus(201)
//   }).catch((err) => {
//     console.log(err);
//   })
// })

router.post('/', upload.single('theUpload'), checkFileType, (req, res) => {
  console.log(req.file);
  console.log('requ body', req.body);
    const queryText = `
  INSERT INTO "gallery" 
("url", "title", "description")
VALUES
($1, $2, $3);
  `
  // const url = `images/${req.file.filename}`
  const queryParams = [req.file.path, req.body.title, req.body.description]
  //   pool.query(queryText, queryParams)
  // .then((result) => {
  //   // console.log(result);
  //   res.sendStatus(201)
  // }).catch((err) => {
  //   console.log(err);
  // })
  res.sendStatus(201)
})

module.exports = router;
