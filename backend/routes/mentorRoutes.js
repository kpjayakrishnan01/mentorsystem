const express = require('express')
const router = express.Router()
const { getMentor, setMentor, updateMentor, deleteMentor } = require('../controllers/mentorController')

router.route('/').get(getMentor).post(setMentor)
router.route('/:id').delete(deleteMentor).put(updateMentor)



module.exports = router