require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', require('./routes/authroutes'));
app.use('/api', require('./routes/taskroutes'));

app.get('/', (req, res) => res.send({ status: 'ok', message: 'Task Manager API with MySQL' }));

// Sync DB and start server
const PORT = process.env.PORT || 5000;
(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error('DB sync error:', err);
  }
})();