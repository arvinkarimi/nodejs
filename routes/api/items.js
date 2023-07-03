const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
// Load item model
const item = require('../../models/item');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../../models/user")
// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send({
    name: "nike red shoes",
    price:"$200/day",
    disc:"This site is for solving all your needs for a short time with the help of others but here we care about user exprince and take very care of our costumre.",
    location: "street 325 apartement 4",
    image: "/images/niki.jpg"
}));
router.post('/uploadImage', (req, res) => {
  // Get the file that was set to our field named "image"
  const  image  = req.files;

  // If no image submitted, exit
  if (!image) return res.sendStatus(400);

  // If does not have image mime type prevent from uploading
  // if (/^image/.test(image.file.mimetype)) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  image.file.mv("../frontend/public" + '/images/' + image.file.name);
 
  // All good
  res.sendStatus(200);
 
});
router.post('/', (req, res) => {
  // Get the file that was set to our field named "image"
  // const { image } = req.files;

  // If no image submitted, exit
  // if (!image) return res.sendStatus(400);
  
  req.body.images[0].src ="/images/" + req.body.images[0].src 
  // If does not have image mime type prevent from uploading
  // if (/^image/.test(image.mimetype)) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  // image.mv(__dirname + '/upload/' + image.name);

  // All good
  // res.sendStatus(200);
  console.log("fuckk this" , req.body);
  item.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  item.find()
      .then(items => res.json(items))
      .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
  });
  
  // @route GET api/books/:id
  // @description Get single book by id
  // @access Public
  router.get('/:id', (req, res) => {
    console.log(req.params.id);
    item.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  });
  
  // @route GET api/books
  // @description add/save book
  // @access Public
  // router.post('/', (req, res) => {
  //   Book.create(req.body)
  //     .then(book => res.json({ msg: 'Book added successfully' }))
  //     .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  // });
  
  // @route GET api/books/:id
  // @description Update book
  // @access Public
//   router.put('/:id', (req, res) => {
//     Book.findByIdAndUpdate(req.params.id, req.body)
//       .then(book => res.json({ msg: 'Updated successfully' }))
//       .catch(err =>
//         res.status(400).json({ error: 'Unable to update the Database' })
//       );
//   });
  
  // @route GET api/books/:id
  // @description Delete book by id
  // @access Public
//   router.delete('/:id', (req, res) => {
//     Book.findByIdAndRemove(req.params.id, req.body)
//       .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//       .catch(err => res.status(404).json({ error: 'No such a book' }));
//   });



  
  module.exports = router;