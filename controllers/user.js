const User = require('../models/data');

const getHome = async (req, res, next) => {
   return res.send('Home');
}

const getUser = async (req, res, next) => {

   User.findAll({}).then(users => {
      return res.status(200).json({ status: true, User: users })
   }).catch(err => {
      return res.status(501).json({ status: false, Message: err.Message })
   })

}

const postUser = async (req, res, next) => {
   console.log("line 12", req.body);

   User.create({ ...req.body })
      .then((user) => {

         return res.status(201).json({ status: true, User: user })

      })
      .catch(err => {
         return res.status(501).json({ status: false, Message: err.Message })
      });

}

const getUserbyId = async (req, res, next) => {

   try {
      const response = await User.findByPk(req.params.id);

      return res.status(203).json({ status: true, User: response });
   } catch (err) {
      return res.status(501).json({ status: false, Message: err.Message })
   }

}
module.exports = { getHome, getUser, postUser, getUserbyId }