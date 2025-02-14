const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
// STEP 2: Create a GET api that returns query param, path param and return both values with info as json

app.get("/api/user/:id", (req, res) => {
  const pathParam = req.params.id;
  const queryParam = req.query.company;
  const queryParam2 = req.query.empName;

  res.json({
    pathParam,
    queryParam,
    queryParam2,
    info: "Path and Query parameters.",
  });
});
// http://localhost:3000/api/user/123?company=niv&empName=Manoj

// STEP 3: Create a POST api which accepts a JSON data. Return an array of data.

app.post("/api/data", (req, res) => {
  const data = req.body;

  res.status(500).json([data]);
});

// http://localhost:3000/api/data
// {
//     "name": "Alice",
//     "age": 25
//  }
