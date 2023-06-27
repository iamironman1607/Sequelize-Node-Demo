const getHome = async (req, res, next) => {
   return res.send('Home');
}

const getUser = async (req, res, next) => {
   return res.send('user');
}

module.exports = { getHome, getUser }