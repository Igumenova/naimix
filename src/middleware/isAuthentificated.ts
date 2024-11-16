import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

export const isAuthentificated = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            return res
                .status(400)
                .json({ message: 'Пользователь не авторизован' });
        }

        const secretWord = process.env.SECRET;
        const decodedData = jwt.verify(token, secretWord);

        req.user = decodedData;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Пользователь не авторизован' });
    }
};