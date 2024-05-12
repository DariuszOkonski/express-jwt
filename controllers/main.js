const login = async (req, res) => {
  return res.send('Fake Login/Register/Signup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  return res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Hire is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
