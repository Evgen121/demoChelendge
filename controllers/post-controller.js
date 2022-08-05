const Message = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'), { title: 'Error' });
}

const getPost = (req, res) => {
    const title = 'Message';
    Message
        .findById(req.params.id)
        .then(message => res.render(createPath('message'), { message, title }))
        .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
    Message
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => handleError(res, error));
}

const getEditPost = (req, res) => {
    const title = 'Edit Message';
    Message
        .findById(req.params.id)
        .then(message => res.render(createPath('edit-message'), { message, title }))
        .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Message
        .findByIdAndUpdate(id, { title, author, text })
        .then((result) => res.redirect(`/messages/${id}`))
        .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
    const title = 'Messages';
    Message
        .find()
        .sort({ createdAt: -1 })
        .then(message => res.render(createPath('messages'), { message, title }))
        .catch((error) => handleError(res, error));
}

const getAddPost = (req, res) => {
    const title = 'Add Message';
    res.render(createPath('add-message'), { title });
}

const addPost = (req, res) => {
    const { title, author, text } = req.body;
    const message = new Message({ title, author, text });
    message
        .save()
        .then((result) => res.redirect('/messages'))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost,
};