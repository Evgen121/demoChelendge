const Message = require('../models/post');

const handleError = (res, error) => {
    console.log(error)
}

const getPosts = (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((messages) => res.status(200).json(messages))
        .catch((error) => handleError(res, error));
}

const addPost = (req, res) => {
    const { title, author, text } = req.body;
    const message = new Message({ title, author, text });
    message
        .save()
        .then((message) => res.status(200).json(message))
        .catch((error) => handleError(res, error));
}

const getPost = (req, res) => {
    Message
        .findById(req.params.id)
        .then((message) => res.status(200).json(message))
        .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
    const { id } = req.params;
    Message
        .findByIdAndDelete(id)
        .then((message) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}



const editPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Message
        .findByIdAndUpdate(id, { title, author, text }, { new: true })
        .then((message) => res.json(message))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getPosts,
    addPost,
    getPost,
    deletePost,
    editPost,
};