import mongoose, { Schema } from "mongoose";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => "MongoDB Connected")
  .catch((err) => console.error("MONGO ERROR : ", err));
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
