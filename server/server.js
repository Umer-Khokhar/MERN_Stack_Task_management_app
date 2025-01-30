const express = require('express');
const app = express();
 const cors = require('cors');
const taskRoutes = require("./routes/taskRoutes.js")
const PORT = process.env.PORT || 3000
const Mongoose = require('mongoose');
const dbString = "mongodb+srv://umer:umer1234@taskclustor.ahjlq.mongodb.net/?retryWrites=true&w=majority&appName=taskClustor"



// cores 
app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
)

// Middleware

 app.use(express.static('public'));
app.use(express.json());


app.use("/api/tasks", taskRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
})




// Mongoose
Mongoose.connect(dbString)
.then(() => {
    console.log("Connected to MongoDB");    
})
.catch(err => {
    console.error("Error connecting to MongoDB", err);
})

app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
});