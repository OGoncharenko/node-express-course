const express = require('express')
const router = express.Router()

const {
    getPeople,
    createNewPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')

router.get('/', getPeople)
router.post('/', createNewPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router