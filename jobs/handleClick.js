const User = require("../models/User");

const handleClick = async (req, res) => {
  const { userId } = req.query; // Get userId from request

  if (!userId) {
    return res.status(400).json({ error: "User ID required" });
  }

  let user = await User.findOne({ userId });

  if (!user) {
    user = new User({ userId }); 
  }

  user.counter += 1;

  const random = Math.random();
  if (random < 0.5) user.counter += 10;
  else if (random < 0.75) user.prizes += 1;

  await user.save();
  res.json({ counter: user.counter, prizes: user.prizes });
};

module.exports = handleClick;
