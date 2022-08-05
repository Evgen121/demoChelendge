const express = require('express');
const router = express.Router();
const {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost
} = require('../controllers/post-controller');



router.get('/messages/:id', getPost);
router.delete('/messages/:id', deletePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/messages', getPosts);
router.get('/add-message', getAddPost);
router.post('/add-message', addPost);

module.exports = router;