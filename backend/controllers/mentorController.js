const asyncHandler = require('express-async-handler')
// @decs  Get mentor
// @route GET/api/mentor
// @access Private
const getMentor = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get Mentor'})

})

// @decs  set mentor
// @route POST/api/mentor
// @access Private
const setMentor = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Create Mentor'})

})

// @decs  Update mentor
// @route PUT/api/mentor
// @access Private
const updateMentor = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update mentor ${req.params.id}`})

})

// @decs  Delete mentor
// @route GET/api/mentor
// @access Private
const deleteMentor = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete mentor ${req.params.id}`})
})


module.exports = {
    getMentor,
    setMentor,
    updateMentor,
    deleteMentor,
    
}