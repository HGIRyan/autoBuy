const logRequestToConsole = async (req, res, next) => {
  console.log("req.params", req.params);
  next();
};

module.exports = {
  logRequestToConsole,
};
