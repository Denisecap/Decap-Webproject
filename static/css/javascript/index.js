const express = require('express');
const app = express();
const port = 3000; 

// Define sample Nike products data
const nikeProducts = [
  { id: 1, name: 'Nike Air Max', price: 129.99 },
  { id: 2, name: 'Nike Free Run', price: 89.99 },
  { id: 3, name: 'Nike Zoom Pegasus', price: 109.99 },
];

// Define a route to get all Nike products
app.get('/api/nike/products', (req, res) => {
  res.json(nikeProducts);
});

// Define a route to get a single Nike product by ID
app.get('/api/nike/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = nikeProducts.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


