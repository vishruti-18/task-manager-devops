// Imports Express library (used to create web server).

require("dotenv").config();

const express = require("express");

// Imports Mongoose (used to connect Node.js with MongoDB).

const Mongoose = require("mongoose") ;

// Imports CORS (allows frontend to talk to backend

const cors = require("cors") ;
const { default: mongoose } = require("mongoose");

// Creates an Express application (your backend app).
const app = express();
app.use(cors())  // Enables CORS for all requests.
app.use(express.json()); // Allows backend to read JSON data from request body.


// ➡️ Connects to MongoDB database:

// localhost:27017 → MongoDB server

// tasks → database name
// If success → prints MongoDB connected
// If error → prints error

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


// ➡️ Defines structure of data (schema):
// Each task will have:

const TaskSchema = new mongoose.Schema({
    title  : String
});

// ➡️ Creates a model called Task based on schema
// Used to:

// save data

// fetch data

// delete data

const Task = mongoose.model("Task", TaskSchema);

// ➡️ API route for homepage
// When you open:

app.get('/', (req, res) => {
    res.send("Backend running with DB");
});

// ➡️ API to ADD a task:

// Takes title from request body

// Saves it to MongoDB

// Sends saved task back

app.post("/tasks", async (req, res) => {
    const task = new Task({title : req.body.title});
    await task.save();
    res.json(task);
});

// API to GET all tasks from database

app.get("/tasks", async (req, res) => {
    const tasks = await  Task.find();
    res.json(tasks);
});

// API to DELETE task by ID

app.delete("/tasks/:id", async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

// ➡️ Starts server on port 5000
// Frontend → Express API → MongoDB

app.listen(5000, () => {
    console.log("server running on port 5000");
});

