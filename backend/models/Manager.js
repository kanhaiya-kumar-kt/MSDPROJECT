import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, default: "General" },
  },
  { timestamps: true }
);

const Manager = mongoose.model("Manager", managerSchema);
export default Manager;
