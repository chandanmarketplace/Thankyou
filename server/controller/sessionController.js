const verifyToken = (req, res) => {
  res.status(200).json({
    verified: true,
  });
};

module.exports = {
  verifyToken,
};
