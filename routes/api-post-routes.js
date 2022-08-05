const express = require('express');
const {
    getPosts,
    addPost,
    getPost,
    deletePost,
    editPost,
} = require('../controllers/api-post-controller');

const router = express.Router();

// Get All Posts
router.get('/api/messages', getPosts);
// Add New Post
router.post('/api/message/', addPost);
// Get Post by ID
router.get('/api/message/:id', getPost);
// Delete Post by ID
router.delete('/api/message/:id', deletePost);
// Update Post by ID
router.put('/api/message/:id', editPost);

module.exports = router;