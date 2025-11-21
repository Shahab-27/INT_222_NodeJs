import express from 'express';
import { body, validationResult } from 'express-validator';
const app = express();
const userRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse HTML form submissions

userRouter.get('/', (req, res) => {
    // send a simple HTML form with labels (including "Email")
    res.send(`
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>User Register</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 2rem; }
                    label { display: block; margin-top: .5rem; }
                    input { margin-top: .25rem; padding: .4rem; width: 300px; }
                    button { margin-top: 1rem; padding: .5rem 1rem; }
                </style>
            </head>
            <body>
                <h1>Register</h1>
                <form method="post" action="/user/register">
                    <label>Username
                        <input type="text" name="username" required />
                    </label>

                    <label>Email
                        <input type="email" name="email" required />
                    </label>

                    <label>Password
                        <input type="password" name="password" required minlength="6" />
                    </label>

                    <button type="submit">Register</button>
                </form>
            </body>
        </html>
    `);
});

userRouter.post(
    '/register',
    body('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return simple HTML with errors when form submission fails
            const errorList = errors.array().map(e => `<li>${e.msg}</li>`).join('');
            return res.status(400).send(`
                <!doctype html>
                <html>
                    <body>
                        <h2>Validation errors</h2>
                        <ul>${errorList}</ul>
                        <a href="/user">Back to form</a>
                    </body>
                </html>
            `);
        }
        res.send('User registered successfully');
    }
);

app.use('/user', userRouter);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});