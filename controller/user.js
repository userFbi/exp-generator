let USER = require('../models/user')
let editId = null;

exports.viewPage = async (req, res) => {

    const data = await USER.find()

    res.render('user.ejs', { user: data, editData: null });
}

exports.createData = async (req, res) => {

    const data = req.query

    if (editId != null) {
        await USER.findByIdAndUpdate(editId, data)
        editId = null;
    }
    else {
        await USER.create(data)

    }

    res.redirect('/')

}

exports.deleteData = async (req, res) => {

    const deleteId = req.params.deleteId

    await USER.findByIdAndDelete(deleteId)


    res.redirect('/')

}

exports.editData = async (req, res) => {

    const data = await USER.find()
    editId = req.params.editId

    const editData = await USER.findById(editId)
    console.log(editData)

    res.render('user.ejs', { user: data, editData });
}

