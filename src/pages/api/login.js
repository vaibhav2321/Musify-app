import dbConnect from '../../lib/dbConnection';
import User from '../../models/User';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
        const { email, password } = req.body;
        try {
            // Check if the user exists
            const existingUser = await User.findOne({ email });
            if (!existingUser) {
                return res.status(400).json({ error: "User does not exist!" });
            }
            // Check if the password matches
            if (password !== existingUser.password) {
                return res.status(400).json({ error: "Invalid Password!" });
            }
            return res.status(200).json({ message: "Login Successfully!", body: { email: existingUser.email, password: existingUser.password } });
        } catch (error) {
            console.error("ERROR: ", error);
            return res.status(500).json({ error: "Server Error!" });
        }
    } else {
        res.status(405).json({ error: "This method is not allowed!" });
    }
}
