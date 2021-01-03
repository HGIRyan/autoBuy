const { SERVER_PORT, BINANCE_API_KEY, BINANCE_API_SECRET_KEY } = process.env;

module.exports = {
  port: SERVER_PORT,
  binanceAPIKey: BINANCE_API_KEY,
  binanceSecretAPIKey: BINANCE_API_SECRET_KEY,
};
