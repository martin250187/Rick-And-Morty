const users = require("../utils/users");
const getLogin = (req, res) => {
  const { email, password } = req.query;
  let autorizado = false;
  autorizado = users.find(
    (user) => user.email === email && user.password === password
  );
  autorizado
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = getLogin;
