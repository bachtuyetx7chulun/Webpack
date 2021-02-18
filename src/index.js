const endPoints = require("express-list-endpoints");
const app = require("./server");
const { PORT } = require("./configs");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(endPoints(app));
});
