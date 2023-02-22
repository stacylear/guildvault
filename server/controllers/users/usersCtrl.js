//Register User
const registerUserCtrl = async (req, res) => {
    try {
        res.json({msg: 'Register route'})
    } catch (error) {   
        res.json(error);
    }
}

//Login User
const userLoginCtrl = async (req, res) => {
    try {
        res.json({msg: 'Login route'})
    } catch (error) {   
        res.json(error);
    }
}

//Get User Profile by ID
const userProfileCtrl = async (req, res) => {
    try {
        res.json({msg: 'Profile route'})
    } catch (error) {   
        res.json(error);
    }
}

//Update User by ID
const updateUserCtrl = async (req, res) => {
    try {
        res.json({msg: 'Update route'})
    } catch (error) {   
        res.json(error);
    }
}

//Delete User by ID
const deleteUserCtrl = async (req, res) => {
    try {
        res.json({msg: 'Delete route'})
    } catch (error) {   
        res.json(error);
    }
}

//Since we are exporting multiple functions, we export them as objects
module.exports = {
    registerUserCtrl,  
    userLoginCtrl,
    userProfileCtrl,
    updateUserCtrl,
    deleteUserCtrl,  
}