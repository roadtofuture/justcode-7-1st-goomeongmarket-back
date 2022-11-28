require("dotenv").config();

const { createApp } = require("./app");

// TODO 1 - router 제거
// const router = require("./routes");

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
