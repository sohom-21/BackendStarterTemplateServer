import express from 'express';
import {PORT} from "./config/env.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import connectToMongoDB from "./DataBase/mongodb.js";

const app = express();
const port = PORT || 3000;

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/register', (req, res) => {
    res.send('Thank you for registering!');
});

app.get('/login', (req, res) => {
    res.send('Thank you for logging in!');
});

app.listen(port, async () => {
    console.log(`Server started on port ${port} view it on http://localhost:${port}`);
    await connectToMongoDB();
});