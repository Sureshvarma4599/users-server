const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRouter');
const roleRoutes = require('./routes/roleRouter');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
