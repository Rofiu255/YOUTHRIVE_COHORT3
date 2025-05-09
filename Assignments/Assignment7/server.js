const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Item = require("./models/Items");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/lost-found-db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Campus Lost & Found System");
});

// CREATE: Add a found item
app.post("/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});

// READ: Get all unclaimed items
app.get("/items", async (req, res) => {
  const items = await Item.find({ claimed: false });
  res.json(items);
});

// READ: Get one item by ID
app.get("/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// UPDATE: Update item or mark as claimed
app.put("/items/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedItem) return res.status(404).json({ message: "Item not found" });
  res.json(updatedItem);
});

// DELETE: Remove item
app.delete("/items/:id", async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  if (!deletedItem) return res.status(404).json({ message: "Item not found" });
  res.json({ message: "Item deleted" });
});
