const errorHandler = ({ code, message }, _req, res) => {
  res.status(code || 500).json({ message });
};

module.exports = errorHandler;
