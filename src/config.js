const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  apiHost: process.env.REACT_APP_HOST,
  siteTitle: process.env.REACT_APP_SITE_TITLE,
  ongkir: process.env.REACT_APP_GLOBAL_ONGKIR,
  owner: process.env.REACT_APP_OWNER,
  contact: process.env.REACT_APP_CONTACT,
  rekening: process.env.REACT_APP_BILLING_NO,
  bankName: process.env.REACT_APP_BILLING_BANK,
};
