const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const userRouter = require('./router/UserRouter.js');

dotenv.config();
const app = express();

app.use(bodyparser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('open', () => {
  console.log('Connected');
});

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
