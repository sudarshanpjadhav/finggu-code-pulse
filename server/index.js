const express = require('express');
const bodyParser = require('body-parser');
const fingguRoutes = require('./routes/fingguRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api', fingguRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});