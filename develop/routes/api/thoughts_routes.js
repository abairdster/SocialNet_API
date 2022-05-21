const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughts_controller');

router
    .route('/')
    .get(getAllThoughtsById)
    .post(createThoughts);

router
    .route('/:id')
    .get(createThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

module.exports = router;
    