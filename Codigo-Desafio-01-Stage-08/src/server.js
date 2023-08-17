const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const { id, user } = request.params;
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
