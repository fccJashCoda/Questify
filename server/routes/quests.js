const express = require('express');
const router = express.Router();

// @route /
// @desc get all quests
// @access public
router.get('/', (req, res, next) => {
  res.json({ status: 'ok', payload: 'Route Not Yet Implemented' });
});

// @route /
// @desc post a new quest
// @access public
router.post('/', (req, res, next) => {
  res.json({ status: 'ok', payload: 'Route Not Yet Implemented' });
});

// @route /:id
// @desc get quest with id
// @access public
router.get('/:id', (req, res, next) => {
  res.json({ status: 'ok', payload: 'Route Not Yet Implemented' });
});

// @route /:id
// @desc edit a quest
// @access public
router.put('/:id', (req, res, next) => {
  res.json({ status: 'ok', payload: 'Route Not Yet Implemented' });
});

// @route /:id
// @desc delete a quest
// @access public
router.delete('/:id', (req, res, next) => {
  res.json({ status: 'ok', payload: 'Route Not Yet Implemented' });
});

module.exports = router;
