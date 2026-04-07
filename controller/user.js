const USER = require('../model/user')

exports.viewPage = async (req, res) => {
    const data = await USER.find()   // important

    res.render('user.ejs', { data })
}