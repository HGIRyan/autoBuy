const axios = require("axios");
const { BINANCE_API_KEY, BINANCE_API_SECRET_KEY, BINANCE_BASE_URL } = process.env;

/* 
Steps to complete transaction
1. Get Price of Coin
2. Submit Stop Order to purchase coin at price obtained

Planed Steps
1. Check Price of Current Holdings
2. Get Updated Price of coin
3. If Price is Higher Sell at the higher price
4. Find New Coin To Hold
 */

const basicRequest = async () => {
  console.log("Testing Connection");
  const endpoint = `/api/v3/ticker/price`; //Required to begin with "/"
  const parameters = {
    symbol: ["BTCUSD"],
  };
  const testConnection = await axios.get(`${BINANCE_BASE_URL}${endpoint}`, { params: parameters }).catch((error) => (error ? console.log("error", error) : null));
  if (testConnection?.status === 200) {
    console.log("testConnection", testConnection.data);
    console.log("testConnection", testConnection.headers);
  } else {
    console.log("testConnection.status", testConnection?.response);
  }
};

module.exports = {
  basicRequest,
};
