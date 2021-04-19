const express = require('express')
const connection = require('../src/config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM categories', (err, result) => {
    if (err) {
      res.status(500).send(`An error occured at : ${err}`)
    } else {
      res.status(200).json(result)
    }
  })
})

router.post('/', (req, res) => {
  const sqlValues = req.body
  connection.query('INSERT INTO categories SET ?', sqlValues, err => {
    if (err) {
      res.status(500).send(`An error occurred at : ${err}`)
    } else {
      res.status(200).send('Data successfully added')
    }
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const sqlValues = req.body
  connection.query(
    'UPDATE categories SET ? WHERE id = ?',
    [sqlValues, id],
    err => {
      if (err) {
        res.status(500).send(`An error occured at : ${err}`)
      } else {
        res.status(200).send('Data successfully updated')
      }
    }
  )
})

module.exports = router
