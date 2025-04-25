exports.loginController = (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_EMIAL && password === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}