import dbConnect from '../../lib/dbConnection';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, password, confirmPassword } = req.body;

    // Validate passwords
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match!' });
    }

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists!' });
      }

      // Create a new user
      const newUser = new User({ name, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User Created Successfully!' });
    } catch (error) {
      console.error("ERROR: ", error); // Log the error for debugging
      res.status(500).json({ error: 'Server Error!' });
    }
  } else {
    res.status(405).json({ error: 'This method is not allowed!' });
  }
}
