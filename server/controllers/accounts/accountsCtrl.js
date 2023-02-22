//Create Account
const createAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "Create account route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Get all Accounts
  const getAccountsCtrl = async (req, res) => {
    try {
      res.json({ msg: "Get all accounts route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Get Account by ID
  const getAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "get single account route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //Update Acccount by ID
  const updateAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "update account route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //Delete Acccount by ID
  const deleteAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "delete account route" });
    } catch (error) {
      res.json(error);
    }
  };

  //Since we are exporting multiple functions, we export them as objects
  module.exports = {
    createAccountCtrl,
    getAccountsCtrl,
    getAccountCtrl,
    updateAccountCtrl,
    deleteAccountCtrl,
  };
  