import express from "express";

const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "smartphone" },
  { id: 2, name: "tv" },
  { id: 3, name: "laptop" },
];

app.get("/product", (req, res) => {
  res.json(products);
});

app.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(product);
});

app.post("/product", (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);

  res.json({
    message: "Product added",
    products,
  });
});

app.put("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  product.name = name;

  res.json({
    message: "Product updated",
    product,
  });
});

app.delete("/product/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(index, 1);

  res.send("Product deleted");
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
