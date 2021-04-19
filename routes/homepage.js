const express = require('express')
const connection = require('../src/config')
const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * FROM homepage', (err, result) => {
    if (err) {
      res.status(500).send(`An error occured at : ${err}`)
    } else {
      res.status(200).json(result)
    }
  })
})

router.post('/', (req, res) => {
  const sqlValues = req.body
  connection.query('INSERT INTO homepage SET ?', sqlValues, err => {
    if (err) {
      res.status(500).send(`An error occurred at : ${err}`)
    } else {
      res.status(200).send('Data successfully added')
    }
  })
})

router.put('/', (req, res) => {
  const id = 1
  const sqlValues = req.body
  connection.query(
    'UPDATE homepage SET ? WHERE id = ?',
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
