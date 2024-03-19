// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/04/2024

const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

// Middleware to handle form submissions
app.use(express.urlencoded({ extended: true }));

// Serve the form page
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submissions
app.post('/submit', (req, res) => {
  // Process the form data (you can handle it as needed)
  const formData = req.body;

  // For now, just log the data
  console.log(formData);

  // You can redirect to a thank you page or render another page here
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});