const express = require('express')
const router = express.Router()

const {getBooks, postBook} = require('../controllers/book')

const {postMember, getMember} = require('../controllers/member')

const {getBorrowBook, addBorrow} = require('../controllers/borrow')

router.get('/books', getBooks)
router.post('/book', postBook)

router.post('/member', postMember)
router.get('/members', getMember)

router.post('/borrow', addBorrow)
router.get('/borrow-book/id', getBorrowBook)

module.exports = router;