const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mernblog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const postsRouter = require('./routes/posts');  
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
