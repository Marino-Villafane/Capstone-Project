// const express = require("express");
// const adminRoutes = require("./src/routes/adminRoutes");
// const app = express();
// const PORT = 3000;


// app.use(express.json());


// app.listen(PORT, () => {
//     console.log(`We are here in port ${PORT}`);
// });

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

// app.use("/api", adminRoutes);


const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const userRoutes = require("./src/routes/userRoutes")

const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`We are listening on port number ${PORT}`);
});

app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.post("/api", userRoutes)
