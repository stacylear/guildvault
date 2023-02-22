//Create Transaction
const createTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "create trans route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Get All Transactions
const getTransactionsCtrl = async (req, res) => {
    try {
      res.json({ msg: "all trans route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Get Transaction by ID
const getTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "get single transaction route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Update Transaction by ID
const updateTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "update trans route" });
    } catch (error) {
      res.json(error);
    }
  };
  
//Delete Transaction by ID
const deleteTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "delete trans route" });
    } catch (error) {
      res.json(error);
    }
  };


  //Since we are exporting multiple functions, we export them as objects
  module.exports = {
    createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionsCtrl,
    getTransactionCtrl,
    updateTransactionCtrl,
    deleteTransactionCtrl,
  };
  