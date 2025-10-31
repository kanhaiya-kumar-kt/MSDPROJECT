import express from "express";
import Manager from "../models/Manager.js";

const router = express.Router();

// ➕ Create a new Manager
router.post("/", async (req, res) => {
  try {
    const manager = new Manager(req.body);
    const savedManager = await manager.save();
    res.status(201).json(savedManager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📋 Get all Managers
router.get("/", async (req, res) => {
  try {
    const managers = await Manager.find();
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔍 Get a single Manager by ID
router.get("/:id", async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    if (!manager) return res.status(404).json({ message: "Manager not found" });
    res.status(200).json(manager);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✏️ Update a Manager
router.put("/:id", async (req, res) => {
  try {
    const updatedManager = await Manager.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedManager)
      return res.status(404).json({ message: "Manager not found" });
    res.status(200).json(updatedManager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ❌ Delete a Manager
router.delete("/:id", async (req, res) => {
  try {
    const deletedManager = await Manager.findByIdAndDelete(req.params.id);
    if (!deletedManager)
      return res.status(404).json({ message: "Manager not found" });
    res.status(200).json({ message: "Manager deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
