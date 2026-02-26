const express = require('express');
const cors = require('cors');

const affirmationRoutes = require('./routes/affirmationRoutes');

const app = express();
const PORT = process.env.PORT || 50001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Affirmation API is running' });
});

app.use('/', affirmationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
